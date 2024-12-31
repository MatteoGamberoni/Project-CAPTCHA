webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-captcha/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_botdetect_captcha_module__ = __webpack_require__("./src/app/angular-captcha/src/botdetect-captcha.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_botdetect_captcha_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_captcha_component__ = __webpack_require__("./src/app/angular-captcha/src/captcha.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_captcha_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/angular-captcha/src/botdetect-captcha.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotDetectCaptchaModule; });
/* unused harmony export provideBotDetectCaptcha */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captcha_component__ = __webpack_require__("./src/app/angular-captcha/src/captcha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__captcha_service__ = __webpack_require__("./src/app/angular-captcha/src/captcha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__captcha_helper_service__ = __webpack_require__("./src/app/angular-captcha/src/captcha-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__correct_captcha_directive__ = __webpack_require__("./src/app/angular-captcha/src/correct-captcha.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__captcha_endpoint_pipe__ = __webpack_require__("./src/app/angular-captcha/src/captcha-endpoint.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__("./src/app/angular-captcha/src/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BotDetectCaptchaModule = (function () {
    function BotDetectCaptchaModule() {
    }
    BotDetectCaptchaModule_1 = BotDetectCaptchaModule;
    BotDetectCaptchaModule.forRoot = function (config) {
        return {
            ngModule: BotDetectCaptchaModule_1,
            providers: [provideBotDetectCaptcha(config)]
        };
    };
    BotDetectCaptchaModule.forChild = function (config) {
        return {
            ngModule: BotDetectCaptchaModule_1,
            providers: [provideBotDetectCaptcha(config)]
        };
    };
    BotDetectCaptchaModule = BotDetectCaptchaModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__captcha_endpoint_pipe__["a" /* CaptchaEndpointPipe */],
                __WEBPACK_IMPORTED_MODULE_2__captcha_component__["a" /* CaptchaComponent */],
                __WEBPACK_IMPORTED_MODULE_5__correct_captcha_directive__["a" /* CorrectCaptchaDirective */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__captcha_service__["a" /* CaptchaService */],
                __WEBPACK_IMPORTED_MODULE_4__captcha_helper_service__["a" /* CaptchaHelperService */],
                __WEBPACK_IMPORTED_MODULE_6__captcha_endpoint_pipe__["a" /* CaptchaEndpointPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__captcha_component__["a" /* CaptchaComponent */],
                __WEBPACK_IMPORTED_MODULE_5__correct_captcha_directive__["a" /* CorrectCaptchaDirective */]
            ]
        })
    ], BotDetectCaptchaModule);
    return BotDetectCaptchaModule;
    var BotDetectCaptchaModule_1;
}());

function provideBotDetectCaptcha(config) {
    __WEBPACK_IMPORTED_MODULE_3__captcha_service__["a" /* CaptchaService */].captchaEndpoint = config.captchaEndpoint;
    // we need to keep the below dependency providers for backward compatibility
    return [
        {
            provide: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* CAPTCHA_SETTINGS */],
            useValue: config
        }
    ];
}


/***/ }),

/***/ "./src/app/angular-captcha/src/captcha-endpoint.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaEndpointPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CaptchaEndpointPipe = (function () {
    function CaptchaEndpointPipe() {
    }
    // strip '/' character from the end of the given path.
    CaptchaEndpointPipe.prototype.transform = function (value) {
        if ((value === undefined) || (value === null)) {
            return value;
        }
        return value.trim().replace(/\/+$/g, '');
    };
    CaptchaEndpointPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'captchaEndpoint' })
    ], CaptchaEndpointPipe);
    return CaptchaEndpointPipe;
}());



/***/ }),

/***/ "./src/app/angular-captcha/src/captcha-helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaptchaHelperService = (function () {
    function CaptchaHelperService(http, ngZone) {
        this.http = http;
        this.ngZone = ngZone;
    }
    // get script and execute it immediately
    CaptchaHelperService.prototype.getScript = function (url) {
        var _this = this;
        this.http.get(url, { responseType: 'text' })
            .subscribe(function (scriptString) {
            var f = new Function(scriptString);
            _this.ngZone.runOutsideAngular(function () {
                f();
            });
        });
    };
    CaptchaHelperService.prototype.useUserInputBlurValidation = function (userInput) {
        return (userInput.getAttribute('correctCaptcha') !== null);
    };
    // get captcha endpoint handler from configued captchaEndpoint value,
    // the result can be "simple-captcha-endpoint.ashx", "simple-captcha-endpoint",
    // or "simple-botdetect.php"
    CaptchaHelperService.prototype.getCaptchaEndpointHandler = function (captchaEndpoint) {
        var splited = captchaEndpoint.split('/');
        return splited[splited.length - 1];
    };
    // get backend base url from configued captchaEndpoint value
    CaptchaHelperService.prototype.getBackendBaseUrl = function (captchaEndpoint, captchaEndpointHandler) {
        var lastIndex = captchaEndpoint.lastIndexOf(captchaEndpointHandler);
        return captchaEndpoint.substring(0, lastIndex);
    };
    // change relative to absolute urls in captcha html markup
    CaptchaHelperService.prototype.changeRelativeToAbsoluteUrls = function (originCaptchaHtml, captchaEndpoint) {
        var captchaEndpointHandler = this.getCaptchaEndpointHandler(captchaEndpoint);
        var backendUrl = this.getBackendBaseUrl(captchaEndpoint, captchaEndpointHandler);
        originCaptchaHtml = originCaptchaHtml.replace(/<script.*<\/script>/g, '');
        var relativeUrls = originCaptchaHtml.match(/(src|href)=\"([^"]+)\"/g);
        var relativeUrl, relativeUrlPrefixPattern, absoluteUrl, changedCaptchaHtml = originCaptchaHtml;
        for (var i = 0; i < relativeUrls.length; i++) {
            relativeUrl = relativeUrls[i].slice(0, -1).replace(/src=\"|href=\"/, '');
            relativeUrlPrefixPattern = new RegExp(".*" + captchaEndpointHandler);
            absoluteUrl = relativeUrl.replace(relativeUrlPrefixPattern, backendUrl + captchaEndpointHandler);
            changedCaptchaHtml = changedCaptchaHtml.replace(relativeUrl, absoluteUrl);
        }
        return changedCaptchaHtml;
    };
    CaptchaHelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], CaptchaHelperService);
    return CaptchaHelperService;
}());



/***/ }),

/***/ "./src/app/angular-captcha/src/captcha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__captcha_service__ = __webpack_require__("./src/app/angular-captcha/src/captcha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captcha_helper_service__ = __webpack_require__("./src/app/angular-captcha/src/captcha-helper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaptchaComponent = (function () {
    function CaptchaComponent(elementRef, captchaService, captchaHelper) {
        this.elementRef = elementRef;
        this.captchaService = captchaService;
        this.captchaHelper = captchaHelper;
    }
    Object.defineProperty(CaptchaComponent.prototype, "captchaEndpoint", {
        // provide captchaEndpoint for getting captcha challenge.
        set: function (captchaEndpoint) {
            __WEBPACK_IMPORTED_MODULE_1__captcha_service__["a" /* CaptchaService */].captchaEndpoint = captchaEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaptchaComponent.prototype, "captchaId", {
        // the current captcha id, which will be used for validation purpose.
        get: function () {
            return this.captchaService.botdetectInstance.captchaId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaptchaComponent.prototype, "captchaCode", {
        // the user entered captcha code value.
        // keep this method for backward compatibility
        get: function () {
            return this.captchaService.botdetectInstance.userInput.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaptchaComponent.prototype, "userEnteredCaptchaCode", {
        get: function () {
            return this.captchaCode;
        },
        enumerable: true,
        configurable: true
    });
    // display captcha html markup on component initialization.
    CaptchaComponent.prototype.ngOnInit = function () {
        this.captchaStyleName = this.getCaptchaStyleName();
        // set captcha style name to CaptchaService for creating BotDetect object
        this.captchaService.captchaStyleName = this.captchaStyleName;
        // display captcha html markup on view
        this.displayHtml();
    };
    // get captcha style name.
    CaptchaComponent.prototype.getCaptchaStyleName = function () {
        var styleName;
        styleName = this.captchaStyleName;
        if (styleName) {
            return styleName;
        }
        // backward compatible
        styleName = this.styleName;
        if (styleName) {
            return styleName;
        }
        throw new Error('The captchaStyleName attribute is not found or its value is not set.');
    };
    // display captcha html markup in the <botdetect-captcha> tag.
    CaptchaComponent.prototype.displayHtml = function () {
        var _this = this;
        this.captchaService.getHtml()
            .subscribe(function (captchaHtml) {
            // display captcha html markup
            captchaHtml = _this.captchaHelper.changeRelativeToAbsoluteUrls(captchaHtml, _this.captchaService.captchaEndpoint);
            _this.elementRef.nativeElement.innerHTML = captchaHtml;
            // load botdetect scripts
            _this.loadScriptIncludes();
        }, function (error) {
            throw new Error(error);
        });
    };
    // reload a new captcha image.
    CaptchaComponent.prototype.reloadImage = function () {
        this.captchaService.botdetectInstance.reloadImage();
    };
    // validate captcha on client-side and execute user callback function on ajax success
    CaptchaComponent.prototype.validateUnsafe = function (callback) {
        var _this = this;
        var userInput = this.captchaService.botdetectInstance.userInput;
        var captchaCode = userInput.value;
        if (captchaCode.length !== 0) {
            this.captchaService.validateUnsafe(captchaCode)
                .subscribe(function (isHuman) {
                callback(isHuman);
                if (!_this.captchaHelper.useUserInputBlurValidation(userInput) && !isHuman) {
                    _this.reloadImage();
                }
            }, function (error) {
                throw new Error(error);
            });
        }
        else {
            var isHuman = false;
            callback(isHuman);
        }
    };
    // load botdetect scripts.
    CaptchaComponent.prototype.loadScriptIncludes = function () {
        var captchaId = this.elementRef.nativeElement.querySelector('#BDC_VCID_' + this.captchaStyleName).value;
        var scriptIncludeUrl = this.captchaService.captchaEndpoint + '?get=script-include&c=' + this.captchaStyleName + '&t=' + captchaId + '&cs=201';
        this.captchaHelper.getScript(scriptIncludeUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CaptchaComponent.prototype, "styleName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CaptchaComponent.prototype, "captchaStyleName", void 0);
    CaptchaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'botdetect-captcha',
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__captcha_service__["a" /* CaptchaService */],
            __WEBPACK_IMPORTED_MODULE_2__captcha_helper_service__["a" /* CaptchaHelperService */]])
    ], CaptchaComponent);
    return CaptchaComponent;
}());



/***/ }),

/***/ "./src/app/angular-captcha/src/captcha.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captcha_endpoint_pipe__ = __webpack_require__("./src/app/angular-captcha/src/captcha-endpoint.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaptchaService = (function () {
    function CaptchaService(http, captchaEndpointPipe) {
        this.http = http;
        this.captchaEndpointPipe = captchaEndpointPipe;
    }
    CaptchaService_1 = CaptchaService;
    Object.defineProperty(CaptchaService.prototype, "captchaStyleName", {
        get: function () {
            return this._captchaStyleName;
        },
        set: function (captchaStyleName) {
            this._captchaStyleName = captchaStyleName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaptchaService, "captchaEndpoint", {
        set: function (captchaEndpoint) {
            CaptchaService_1._captchaEndpoint = captchaEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaptchaService.prototype, "captchaEndpoint", {
        // the captcha endpoint for botdetect requests.
        get: function () {
            return this.captchaEndpointPipe.transform(CaptchaService_1._captchaEndpoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaptchaService.prototype, "botdetectInstance", {
        // get botdetect instance, which is provided by botdetect script.
        get: function () {
            return BotDetect.getInstanceByStyleName(this.captchaStyleName);
        },
        enumerable: true,
        configurable: true
    });
    // check if configured captchaEndpoint is valid or not.
    CaptchaService.prototype.isCaptchaEndpointValid = function () {
        return ((this.captchaEndpoint !== undefined)
            && (this.captchaEndpoint !== null)
            && (this.captchaEndpoint !== ''));
    };
    // get captcha html markup from botdetect api.
    CaptchaService.prototype.getHtml = function () {
        if (!this.isCaptchaEndpointValid()) {
            var errorMessage = "captchaEndpoint property is not set!\n    The Angular Captcha Module requires the \"this.captchaComponent.captchaEndpoint\" property to be set.\n    For example: \n    ngOnInit(): void {\n      this.captchaComponent.captchaEndpoint = 'https://your-app-backend-hostname.your-domain.com/simple-captcha-endpoint-path';\n    }\n      ";
            throw new Error(errorMessage);
        }
        var url = this.captchaEndpoint + '?get=html&c=' + this.captchaStyleName;
        return this.http.get(url, { responseType: 'text' });
    };
    // ui validate captcha.
    CaptchaService.prototype.validateUnsafe = function (captchaCode) {
        if (!this.botdetectInstance) {
            throw new Error('BotDetect instance does not exist.');
        }
        var url = this.botdetectInstance.validationUrl + '&i=' + captchaCode;
        return this.http.get(url);
    };
    CaptchaService = CaptchaService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__captcha_endpoint_pipe__["a" /* CaptchaEndpointPipe */]])
    ], CaptchaService);
    return CaptchaService;
    var CaptchaService_1;
}());



/***/ }),

/***/ "./src/app/angular-captcha/src/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAPTCHA_SETTINGS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var CAPTCHA_SETTINGS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('captcha.settings');


/***/ }),

/***/ "./src/app/angular-captcha/src/correct-captcha.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorrectCaptchaDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__captcha_service__ = __webpack_require__("./src/app/angular-captcha/src/captcha.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CorrectCaptchaDirective = (function () {
    function CorrectCaptchaDirective(document, captchaService) {
        this.document = document;
        this.captchaService = captchaService;
    }
    CorrectCaptchaDirective_1 = CorrectCaptchaDirective;
    CorrectCaptchaDirective.prototype.validate = function (c, onBlur) {
        var _this = this;
        if (c) {
            // cache the control for using on blur
            this.control = c;
        }
        return new Promise(function (resolve) {
            // the control should have incorrect status first
            resolve({ incorrectCaptcha: true });
            // we only validate the captcha on blur
            if (onBlur) {
                var userInputID = _this.captchaService.botdetectInstance.options.userInputID;
                var captchaCode = _this.document.getElementById(userInputID).value;
                if (captchaCode) {
                    _this.captchaService.validateUnsafe(captchaCode)
                        .subscribe(function (isHuman) {
                        if (!isHuman) {
                            // ui captcha validation failed
                            _this.captchaService.botdetectInstance.reloadImage();
                            _this.control = null;
                        }
                        else {
                            // ui captcha validation passed
                            _this.control.setErrors(null);
                        }
                    }, function (error) {
                        throw new Error(error);
                    });
                }
            }
        });
    };
    CorrectCaptchaDirective.prototype.onBlur = function () {
        this.validate(undefined, true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CorrectCaptchaDirective.prototype, "onBlur", null);
    CorrectCaptchaDirective = CorrectCaptchaDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[correctCaptcha][formControlName],[correctCaptcha][formControl],[correctCaptcha][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_ASYNC_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return CorrectCaptchaDirective_1; }),
                    multi: true
                }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_3__captcha_service__["a" /* CaptchaService */]])
    ], CorrectCaptchaDirective);
    return CorrectCaptchaDirective;
    var CorrectCaptchaDirective_1;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_basic_component__ = __webpack_require__("./src/app/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notify_basic_notify_basic_success_notify_component__ = __webpack_require__("./src/app/notify/basic-notify/basic-success-notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notify_contact_notify_contact_success_notify_component__ = __webpack_require__("./src/app/notify/contact-notify/contact-success-notify.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/basic', pathMatch: 'full' },
    { path: 'basic', component: __WEBPACK_IMPORTED_MODULE_2__basic_basic_component__["a" /* BasicComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'basic-success-notify', component: __WEBPACK_IMPORTED_MODULE_4__notify_basic_notify_basic_success_notify_component__["a" /* BasicSuccessNotifyComponent */] },
    { path: 'contact-success-notify', component: __WEBPACK_IMPORTED_MODULE_5__notify_contact_notify_contact_success_notify_component__["a" /* ContactSuccessNotifyComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"header-content\"><h1>s_api-captcha-angular-plainphp</h1></div>\r\n</header>\r\n\r\n<nav>\r\n  <ul class=\"nav\">\r\n    <li><a routerLink=\"/basic\" routerLinkActive=\"active\">Basic Example</a></li>\r\n    <li><a routerLink=\"/contact\" routerLinkActive=\"active\">Contact Example</a></li>\r\n  </ul>\r\n</nav>\r\n\r\n<section id=\"main-content\">\r\n  <router-outlet></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_captcha__ = __webpack_require__("./src/app/angular-captcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basic_basic_component__ = __webpack_require__("./src/app/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notify_basic_notify_basic_success_notify_component__ = __webpack_require__("./src/app/notify/basic-notify/basic-success-notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notify_contact_notify_contact_success_notify_component__ = __webpack_require__("./src/app/notify/contact-notify/contact-success-notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__values_pipe__ = __webpack_require__("./src/app/values.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__basic_basic_component__["a" /* BasicComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__values_pipe__["a" /* ValuesPipe */],
                __WEBPACK_IMPORTED_MODULE_9__notify_basic_notify_basic_success_notify_component__["a" /* BasicSuccessNotifyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__notify_contact_notify_contact_success_notify_component__["a" /* ContactSuccessNotifyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                // import the Angular Captcha Module
                __WEBPACK_IMPORTED_MODULE_5__angular_captcha__["a" /* BotDetectCaptchaModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basic/basic.component.css":
/***/ (function(module, exports) {

module.exports = "label {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  margin-top: 10px;\r\n}\r\n\r\nlabel span {\r\n  display: block;\r\n  margin-bottom: 3px;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"email\"] {\r\n  width: 261px;\r\n  height: 25px;\r\n  padding: 0 5px;\r\n}\r\n\r\n.alert {\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.alert-success {\r\n  background: #5db95d;\r\n  color: #fff;\r\n  border: 1px solid #4e974e;\r\n}\r\n\r\n.alert-error {\r\n  background: #db4f4a;\r\n  color: #fff;\r\n  border: 1px solid #b0352f;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  font-size: 12px;\r\n}\r\n\r\nbutton {\r\n  margin-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/basic/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate #f=\"ngForm\" (ngSubmit)=\"validate(f.value, f.valid)\">\r\n\r\n  <div class=\"alert alert-success\" *ngIf=\"successMessages\">\r\n    {{ successMessages }}\r\n  </div>\r\n\r\n  <div class=\"alert alert-error\" *ngIf=\"errorMessages\">\r\n    {{ errorMessages }}\r\n  </div>\r\n\r\n  <!-- captcha challenge: placeholder -->\r\n  <botdetect-captcha captchaStyleName=\"angularBasicCaptcha\"></botdetect-captcha>  \r\n\r\n  <label>\r\n    <span>Retype the characters from the picture:</span>\r\n    <!-- captcha code: user-input textbox -->\r\n    <input\r\n      type=\"text\"\r\n      id=\"userCaptchaInput\"\r\n      name=\"userCaptchaInput\"\r\n      ngModel\r\n      #userCaptchaInput=\"ngModel\"  \r\n    >\r\n  </label>\r\n\r\n  <button type=\"submit\">Validate</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/basic/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_captcha__ = __webpack_require__("./src/app/angular-captcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_service__ = __webpack_require__("./src/app/basic/basic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasicComponent = (function () {
    function BasicComponent(basicService, router) {
        this.basicService = basicService;
        this.router = router;
    }
    BasicComponent.prototype.ngOnInit = function () {
        // set the captchaEndpoint property to point to 
        // the captcha endpoint path on your app's backend
        this.captchaComponent.captchaEndpoint = 'botdetect-captcha-lib/simple-botdetect.php';
    };
    /**
     * Process the form on submit event.
     */
    BasicComponent.prototype.validate = function (value, valid) {
        var _this = this;
        // get the user-entered captcha code value to be validated at the backend side        
        var userEnteredCaptchaCode = this.captchaComponent.userEnteredCaptchaCode;
        // get the id of a captcha instance that the user tried to solve
        var captchaId = this.captchaComponent.captchaId;
        var postData = {
            // add the user-entered captcha code value to the post data    
            userEnteredCaptchaCode: userEnteredCaptchaCode,
            // add the id of a captcha instance to the post data      
            captchaId: captchaId
        };
        // post the captcha data to the backend
        this.basicService.send(postData)
            .subscribe(function (response) {
            if (response.success == false) {
                // captcha validation failed; show the error message
                _this.errorMessages = 'CAPTCHA validation failed.';
                // call the this.captchaComponent.reloadImage()
                // in order to generate a new captcha challenge
                _this.captchaComponent.reloadImage();
            }
            else {
                // captcha validation succeeded; proceed with the workflow
                _this.router.navigate(['/basic-success-notify']);
            }
        }, function (error) {
            throw new Error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_captcha__["b" /* CaptchaComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_captcha__["b" /* CaptchaComponent */])
    ], BasicComponent.prototype, "captchaComponent", void 0);
    BasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'basic-form',
            template: __webpack_require__("./src/app/basic/basic.component.html"),
            styles: [__webpack_require__("./src/app/basic/basic.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__basic_service__["a" /* BasicService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__basic_service__["a" /* BasicService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/basic/basic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicService = (function () {
    function BasicService(http) {
        this.http = http;
        // basic api url
        this.basicUrl = 'form/basic.php';
    }
    BasicService.prototype.send = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.basicUrl, data, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error); });
    };
    BasicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BasicService);
    return BasicService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "label {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  margin-top: 10px;\r\n}\r\n\r\nlabel span {\r\n  display: block;\r\n  margin-bottom: 3px;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"email\"] {\r\n  width: 261px;\r\n  height: 25px;\r\n  padding: 0 5px;\r\n}\r\n\r\ntextarea {\r\n  width: 269px;\r\n  height: 50px;\r\n}\r\n\r\n.textarea-error {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.alert {\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.alert-success {\r\n  background: #5db95d;\r\n  color: #fff;\r\n  border: 1px solid #4e974e;\r\n}\r\n\r\n.alert-error {\r\n  background: #db4f4a;\r\n  color: #fff;\r\n  border: 1px solid #b0352f;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  font-size: 12px;\r\n}\r\n\r\n.list-messages {\r\n  margin: 0; padding: 0;\r\n}\r\n\r\nbutton {\r\n  margin-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate (ngSubmit)=\"send(contact)\" [formGroup]=\"contact\">\r\n\r\n  <div class=\"alert alert-error\" *ngIf=\"errorMessages\">\r\n    <ul class=\"list-messages\">\r\n      <li *ngFor=\"let error of errorMessages | values\">\r\n        {{ error }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <label>\r\n    <span>Name:</span>\r\n    <input\r\n      type=\"text\"\r\n      name=\"name\"\r\n      formControlName=\"name\">\r\n  </label>\r\n\r\n  <div\r\n    class=\"error\"\r\n    *ngIf=\"contact.get('name').hasError('minlength') && contact.get('name').touched\"\r\n    >\r\n    Name must be at least 3 chars long!\r\n  </div>\r\n\r\n\r\n  <label>\r\n    <span>Email:</span>\r\n    <input\r\n      type=\"email\"\r\n      name=\"email\"\r\n      formControlName=\"email\">\r\n  </label>\r\n\r\n  <div\r\n    class=\"error\"\r\n    *ngIf=\"contact.get('email').hasError('pattern') && contact.get('email').touched\"\r\n    >\r\n    Email is invalid!\r\n  </div>\r\n\r\n\r\n  <label>\r\n    <span>Subject:</span>\r\n    <input\r\n      type=\"text\"\r\n      name=\"subject\"\r\n      formControlName=\"subject\">\r\n  </label>\r\n\r\n  <div\r\n    class=\"error\"\r\n    *ngIf=\"contact.get('subject').hasError('minlength') && contact.get('subject').touched\"\r\n    >\r\n    Subject must be at least 10 chars long!\r\n  </div>\r\n\r\n\r\n  <label>\r\n    <span>Message:</span>\r\n    <textarea\r\n      name=\"message\"\r\n      formControlName=\"message\"></textarea>\r\n  </label>\r\n\r\n  <div\r\n    class=\"error textarea-error\"\r\n    *ngIf=\"contact.get('message').hasError('minlength') && contact.get('message').touched\"\r\n    >\r\n    Message must be at least 10 chars long!\r\n  </div>\r\n  \r\n  <!-- captcha challenge: placeholder -->\r\n  <botdetect-captcha captchaStyleName=\"angularFormCaptcha\"></botdetect-captcha>\r\n\r\n  <label>\r\n    <span>Retype the chars long from the picture:</span>\r\n    <!-- captcha code: user-input textbox -->\r\n    <input\r\n      type=\"text\"\r\n      id=\"userCaptchaInput\"\r\n      name=\"userCaptchaInput\"\r\n      formControlName=\"userCaptchaInput\"\r\n    >\r\n  </label>\r\n\r\n\r\n  <button type=\"submit\">Send</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_captcha__ = __webpack_require__("./src/app/angular-captcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_service__ = __webpack_require__("./src/app/contact/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = (function () {
    function ContactComponent(fb, contactService, router) {
        this.fb = fb;
        this.contactService = contactService;
        this.router = router;
        this.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    ContactComponent.prototype.ngOnInit = function () {
        // set the captchaEndpoint property to point to 
        // the captcha endpoint path on your app's backend
        this.captchaComponent.captchaEndpoint = 'botdetect-captcha-lib/simple-botdetect.php';
        this.contact = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(this.emailRegex)]],
            subject: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(10)]],
            message: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(10)]],
            userCaptchaInput: [''] // we will validate user captcha input value at the backend side
        });
    };
    /**
     * Process the contact form on submit event.
     */
    ContactComponent.prototype.send = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            // get the user-entered captcha code value to be validated at the backend side        
            var userEnteredCaptchaCode = this.captchaComponent.userEnteredCaptchaCode;
            // get the id of a captcha instance that the user tried to solve
            var captchaId = this.captchaComponent.captchaId;
            var postData = {
                name: value.name,
                email: value.email,
                subject: value.subject,
                message: value.message,
                // add the user-entered captcha code value to the post data    
                userEnteredCaptchaCode: userEnteredCaptchaCode,
                // add the id of a captcha instance to the post data      
                captchaId: captchaId
            };
            // post both the form-data and captcha data to the backend
            this.contactService.send(postData)
                .subscribe(function (response) {
                if (response.success == false) {
                    // captcha validation failed; show the error message
                    _this.errorMessages = response.errors;
                    // call the this.captchaComponent.reloadImage()
                    // in order to generate a new captcha challenge
                    _this.captchaComponent.reloadImage();
                }
                else {
                    // captcha validation succeeded; proceed with the workflow
                    _this.router.navigate(['/contact-success-notify']);
                }
            }, function (error) {
                throw new Error(error);
            });
        }
        else {
            this.errorMessages = { formInvalid: 'Please enter valid values.' };
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_captcha__["b" /* CaptchaComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_captcha__["b" /* CaptchaComponent */])
    ], ContactComponent.prototype, "captchaComponent", void 0);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'contact-form',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__contact_service__["a" /* ContactService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__contact_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        // contact api url
        this.contactUrl = 'form/contact.php';
    }
    ContactService.prototype.send = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.contactUrl, data, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error); });
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/notify/basic-notify/basic-success-notify.component.css":
/***/ (function(module, exports) {

module.exports = ".alert {\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.alert-success {\r\n  background: #5db95d;\r\n  color: #fff;\r\n  border: 1px solid #4e974e;\r\n}\r\n\r\na.back {\r\n  text-decoration: underline !important;\r\n  font-size: 11px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/notify/basic-notify/basic-success-notify.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"alert alert-success\">Captcha validation succeeded at the backend side.</p>\r\n\r\n<p>\r\n    <a class=\"back\" routerLink=\"/basic\" routerLinkActive=\"active\">&larr; Back to Basic form example.</a>\r\n</p>"

/***/ }),

/***/ "./src/app/notify/basic-notify/basic-success-notify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicSuccessNotifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicSuccessNotifyComponent = (function () {
    function BasicSuccessNotifyComponent() {
    }
    BasicSuccessNotifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'basic-success-notify',
            template: __webpack_require__("./src/app/notify/basic-notify/basic-success-notify.component.html"),
            styles: [__webpack_require__("./src/app/notify/basic-notify/basic-success-notify.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], BasicSuccessNotifyComponent);
    return BasicSuccessNotifyComponent;
}());



/***/ }),

/***/ "./src/app/notify/contact-notify/contact-success-notify.component.css":
/***/ (function(module, exports) {

module.exports = ".alert {\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.alert-success {\r\n  background: #5db95d;\r\n  color: #fff;\r\n  border: 1px solid #4e974e;\r\n}\r\n\r\na.back {\r\n  text-decoration: underline !important;\r\n  font-size: 11px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/notify/contact-notify/contact-success-notify.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"alert alert-success\">Thank you! Your message was sent successfully.</p>\r\n\r\n<p>\r\n    <a class=\"back\" routerLink=\"/contact\" routerLinkActive=\"active\">&larr; Back to Contact form example.</a>\r\n</p>"

/***/ }),

/***/ "./src/app/notify/contact-notify/contact-success-notify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSuccessNotifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactSuccessNotifyComponent = (function () {
    function ContactSuccessNotifyComponent() {
    }
    ContactSuccessNotifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'contact-success-notify',
            template: __webpack_require__("./src/app/notify/contact-notify/contact-success-notify.component.html"),
            styles: [__webpack_require__("./src/app/notify/contact-notify/contact-success-notify.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ContactSuccessNotifyComponent);
    return ContactSuccessNotifyComponent;
}());



/***/ }),

/***/ "./src/app/values.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValuesPipe = (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value) {
        return Object.keys(value).map(function (key) { return value[key]; });
    };
    ValuesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'values' })
    ], ValuesPipe);
    return ValuesPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map