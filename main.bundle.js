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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n<app-sidebar *ngIf=\"username\"></app-sidebar>\n<div class=\"main-panel\">\n  <app-navbar *ngIf=\"username\"></app-navbar>\n  <div  class=\"content\">\n  <!-- <app-dashboard></app-dashboard> -->\n  <router-outlet></router-outlet>\n  </div>\n  <app-footer></app-footer>\n</div>\n\n</div>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.setUser = function (name, role, email) {
        localStorage.setItem("username", name);
        localStorage.setItem("role", role);
        localStorage.setItem("email", email);
        this.username = localStorage.username;
        this.role = localStorage.role;
        this.email = localStorage.email;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        if (localStorage.username) {
            this.username = localStorage.username;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_chartist__ = __webpack_require__("./node_modules/ng-chartist/bundles/ng-chartist.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_chartist__["ChartistModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-warning card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">style</i>\n                      </div>\n                      <p class=\"card-category\">Products Purchased</p>\n                      <h3 class=\"card-title\">10,000\n                      </h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">date_range</i> Last 24 Hours\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-success card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">attach_money</i>\n                      </div>\n                      <p class=\"card-category\">Revenue</p>\n                      <h3 class=\"card-title\">$34,245</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">date_range</i> Last 24 Hours\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-danger card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">info_outline</i>\n                      </div>\n                      <p class=\"card-category\">Incidents</p>\n                      <h3 class=\"card-title\">800</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">date_range</i> Last 24 Hours\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-info card-header-icon\">\n                      <div class=\"card-icon\">\n                            <i class=\"material-icons\">offline_pin</i>\n                      </div>\n                      <p class=\"card-category\">Incidents Fixed</p>\n                      <h3 class=\"card-title\">750</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">date_range</i> Last 24 Hours\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <!-- Chart Cards -->\n      <div class=\"row\">\n            <ng-container *ngIf=\"role=='CEO'\">\n          <div class=\"col-md-6\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-success\">\n                      <x-chartist class=\"ct-chart\" style=\"stroke-width:50px;\"\n                      [data]=\"customer_suffering.data\"\n                      [type]=\"customer_suffering.type\"\n                      [options]=\"customer_suffering.options\"\n                      [responsiveOptions]=\"customer_suffering.responsiveOptions\"\n                      [events]=\"customer_suffering.events\">\n                    </x-chartist>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Customer Suffering Report</h4>\n                      <p class=\"card-category\">\n                          <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 25% </span> increase in today's report.</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">refresh</i> updated 4 minutes ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-6\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-info\">\n                      <div class=\"feedback-chart\">\n                          <div class=\"rated-happy\">\n                            <div class=\"smiley happy\">\n                        <div class=\"eyes\">\n                          <div class=\"eye\"></div>\n                          <div class=\"eye\"></div>\n                        </div>\n                        <div class=\"mouth\"></div>\n                        <div class=\"card-title\">\n                            <h3><b>30%</b></h3>\n                            <h3>Happy</h3>\n                          </div>\n                      </div>\n                        </div>\n                        <div  class=\"rated-sad\">\n                          <div class=\"smiley normal\">\n                        <div class=\"eyes\">\n                          <div class=\"eye\"></div>\n                          <div class=\"eye\"></div>\n                        </div>\n                        <div class=\"mouth\"></div>\n                        <div class=\"card-title\">\n                            <h3><b>40%</b></h3>\n                            <h3>Satisfied</h3>\n                          </div>\n                      </div>\n                        </div>\n                        <div  class=\"rated-angry\"> \n                          <div class=\"smiley angry\">\n                        <div class=\"eyes\">\n                          <div class=\"eye\"></div>\n                          <div class=\"eye\"></div>\n                        </div>\n                        <div class=\"mouth\"></div>\n                        <div class=\"card-title\">\n                            <h3><b>50%</b></h3>\n                            <h3>Angry</h3>\n                          </div>\n                      </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Voice of Customer</h4>\n                      <!-- <p class=\"card-category\">Last Campaign Performance</p> -->\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> Weekly Report\n                      </div>\n                  </div>\n              </div>\n          </div>\n            </ng-container>\n<ng-container *ngIf=\"role=='manager'\">\n        <div class=\"col-md-6 col-sm-12\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header card-header-danger\">\n                            <div id=\"open_incidences\"></div>\n                    </div>\n                    <div class=\"card-body\">\n                            <h4 class=\"card-title\">Open Incidents Current</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-sm-12\">\n                    <div class=\"card card-chart\">\n                        <div class=\"card-header card-header-warning\">\n                                <div id=\"customer_suffering_report\"></div>\n                        </div>\n                        <div class=\"card-body\">\n                                <h4 class=\"card-title\">Customer Suffering Report</h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-sm-12\">\n                    <div class=\"card card-chart\">\n                        <div class=\"card-header card-header-success\">\n                                <div id=\"incident_weekly_report\"></div>\n                        </div>\n                        <div class=\"card-body\">\n                                <h4 class=\"card-title\">Incident Weekly Report</h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-sm-12\">\n                        <div class=\"card card-chart\">\n                            <div class=\"card-header card-header-info\">\n                                    <div id=\"regions_chart\"></div>\n                            </div>\n                            <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Regional Incitents</h4>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-sm-12\">\n                            <div class=\"card card-chart\">\n                                <div class=\"card-header card-header-primary\">\n                                        <div id=\"incedents_hour\"></div>\n                                </div>\n                                <div class=\"card-body\">\n                                        <h4 class=\"card-title\">Average Incident Life Span (in hours)</h4>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-sm-12\">\n                                <div class=\"card card-chart\">\n                                    <div class=\"card-header card-header-danger\">\n                                            <div id=\"repair_time\"></div>\n                                    </div>\n                                    <div class=\"card-body\">\n                                            <h4 class=\"card-title\">Mean Time To Repair (in days)</h4>\n                                    </div>\n                                </div>\n                            </div>\n\n</ng-container>\n\n      </div>\n      <!-- end of chart cards -->\n  </div>\n\n  <!-- Modal -->\n<div class=\"modal fade\" id=\"cookingSufferers\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Cooking & Baking Sufferers</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                    <div id=\"sufferers_piechart\"></div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- end of modal -->"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".feedback-chart {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .feedback-chart .card-title {\n    position: absolute;\n    bottom: -80px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    text-align: center;\n    width: 100%; }\n  .feedback-chart .card-title h3 {\n      margin: 0px; }\n  /* Smiley */\n  .smiley {\n  margin-top: 88PX;\n  background: linear-gradient(135deg, #ffe919 0%, #fbc000 100%);\n  border-radius: 100%;\n  padding: 25px;\n  position: relative;\n  width: 150px;\n  height: 150px;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(calc(-50% - 121px));\n          transform: translateX(-50%) translateY(calc(-50% - 121px));\n  -webkit-box-shadow: rgba(0, 0, 0, 0.09) 0px 30px 30px 1px, #0000001a 0px 20px 10px 1px;\n          box-shadow: rgba(0, 0, 0, 0.09) 0px 30px 30px 1px, #0000001a 0px 20px 10px 1px; }\n  .mouth {\n  width: 60%;\n  height: 30%;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 100px;\n  border-bottom-right-radius: 100px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  bottom: 18%;\n  left: 50%;\n  margin-left: -30%;\n  background: #B57700;\n  -webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .eyes {\n  width: 100%;\n  margin-top: 15%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 5px;\n  -webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .eyes .eye {\n  width: 20px;\n  height: 20px;\n  background: #B57700;\n  float: left;\n  border-radius: 100%;\n  position: relative; }\n  .eyes .eye:nth-of-type(2) {\n  float: right; }\n  .eyes .eye::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0%;\n  height: 0%;\n  background: #fed800;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  top: -15px;\n  left: 5px;\n  -webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .eyes .eye:first-of-type::after {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  left: auto;\n  right: 5px; }\n  /* Normal animation */\n  .smiley.normal .mouth,\n#normal[type=radio]:checked ~ .smiley .mouth {\n  border-top-left-radius: 100px;\n  border-top-right-radius: 100px;\n  border-bottom-left-radius: 100px;\n  border-bottom-right-radius: 100px;\n  height: 10%;\n  width: 40%;\n  bottom: 25%;\n  margin-left: -20%; }\n  .smiley.normal .eyes,\n#normal[type=radio]:checked ~ .smiley .eyes {\n  margin-top: 30%; }\n  /* angry animation */\n  .smiley.angry .mouth,\n#angry[type=radio]:checked ~ .smiley .mouth {\n  width: 40%;\n  height: 20%;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  bottom: 18%;\n  left: 50%;\n  margin-left: -20%;\n  border-bottom: 0; }\n  .smiley.angry .eyes,\n#angry[type=radio]:checked ~ .smiley .eyes {\n  margin-top: 35%; }\n  .smiley.angry .eye::after,\n#angry[type=radio]:checked ~ .smiley .eye::after {\n  width: 120%;\n  height: 50%;\n  -webkit-transform: rotate(-35deg);\n          transform: rotate(-35deg);\n  top: -3px;\n  left: -5px;\n  border-radius: 0; }\n  .smiley.angry .eye:first-of-type::after,\n#angry[type=radio]:checked ~ .smiley .eye:first-of-type::after {\n  -webkit-transform: rotate(35deg);\n          transform: rotate(35deg);\n  left: auto;\n  right: -5px; }\n  /* */\n  .smiley.happy .mouth,\n#happy[type=radio]:checked ~ .smiley .mouth {\n  -webkit-animation: infinite  move-mouth-down 3s;\n          animation: infinite  move-mouth-down 3s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n  @-webkit-keyframes move-mouth-down {\n  0% {\n    bottom: 18%; }\n  20% {\n    bottom: 16%; }\n  40% {\n    bottom: 16%; }\n  60% {\n    bottom: 18%; }\n  100% { } }\n  @keyframes move-mouth-down {\n  0% {\n    bottom: 18%; }\n  20% {\n    bottom: 16%; }\n  40% {\n    bottom: 16%; }\n  60% {\n    bottom: 18%; }\n  100% { } }\n  .smiley.happy .eyes,\n#happy[type=radio]:checked ~ .smiley .eyes {\n  -webkit-animation: infinite  move-eyes-down 3s;\n          animation: infinite  move-eyes-down 3s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n  @-webkit-keyframes move-eyes-down {\n  0% {\n    margin-top: 15%; }\n  20% {\n    margin-top: 19%; }\n  40% {\n    margin-top: 19%; }\n  60% {\n    margin-top: 15%; }\n  100% { } }\n  @keyframes move-eyes-down {\n  0% {\n    margin-top: 15%; }\n  20% {\n    margin-top: 19%; }\n  40% {\n    margin-top: 19%; }\n  60% {\n    margin-top: 15%; }\n  100% { } }\n  .smiley.happy .eye:nth-of-type(2),\n#happy[type=radio]:checked ~ .smiley .eye:nth-of-type(2) {\n  height: 20px;\n  margin-top: 0;\n  -webkit-animation: infinite  wink 3s;\n          animation: infinite  wink 3s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n  @-webkit-keyframes wink {\n  0% {\n    height: 20px;\n    margin-top: 0; }\n  20% {\n    height: 3px;\n    margin-top: 8px; }\n  40% {\n    height: 3px;\n    margin-top: 8px; }\n  60% {\n    height: 20px;\n    margin-top: 0; }\n  100% { } }\n  @keyframes wink {\n  0% {\n    height: 20px;\n    margin-top: 0; }\n  20% {\n    height: 3px;\n    margin-top: 8px; }\n  40% {\n    height: 3px;\n    margin-top: 8px; }\n  60% {\n    height: 20px;\n    margin-top: 0; }\n  100% { } }\n  .smiley.normal .eye,\n#normal[type=radio]:checked ~ .smiley .eye {\n  height: 20px;\n  margin-top: 0;\n  -webkit-animation: infinite  blink 3s;\n          animation: infinite  blink 3s;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n  @-webkit-keyframes blink {\n  0% {\n    height: 20px;\n    margin-top: 0; }\n  10% {\n    height: 2px;\n    margin-top: 8px; }\n  20% {\n    height: 20px;\n    margin-top: 0; }\n  30% {\n    height: 2px;\n    margin-top: 8px; }\n  40% {\n    height: 20px;\n    margin-top: 0; }\n  100% { } }\n  @keyframes blink {\n  0% {\n    height: 20px;\n    margin-top: 0; }\n  10% {\n    height: 2px;\n    margin-top: 8px; }\n  20% {\n    height: 20px;\n    margin-top: 0; }\n  30% {\n    height: 2px;\n    margin-top: 8px; }\n  40% {\n    height: 20px;\n    margin-top: 0; }\n  100% { } }\n  .smiley.angry .eyes,\n.smiley.angry .mouth,\n#angry[type=radio]:checked ~ .smiley .eyes,\n#angry[type=radio]:checked ~ .smiley .mouth {\n  -webkit-animation: infinite  move-angry-head 6s;\n          animation: infinite  move-angry-head 6s;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n  @-webkit-keyframes move-angry-head {\n  0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n  10% {\n    -webkit-transform: translateX(-20%);\n            transform: translateX(-20%); }\n  20% {\n    -webkit-transform: translateX(15%);\n            transform: translateX(15%); }\n  30% {\n    -webkit-transform: translateX(-20%);\n            transform: translateX(-20%); }\n  40% {\n    -webkit-transform: translateX(5%);\n            transform: translateX(5%); }\n  50% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n  100% { } }\n  @keyframes move-angry-head {\n  0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n  10% {\n    -webkit-transform: translateX(-20%);\n            transform: translateX(-20%); }\n  20% {\n    -webkit-transform: translateX(15%);\n            transform: translateX(15%); }\n  30% {\n    -webkit-transform: translateX(-20%);\n            transform: translateX(-20%); }\n  40% {\n    -webkit-transform: translateX(5%);\n            transform: translateX(5%); }\n  50% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n  100% { } }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var data = __webpack_require__("./src/app/dashboard/data.json");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.customer_suffering =
            {
                data: data.customer_suffering,
                type: 'Bar',
                options: {
                    seriesBarDistance: 10,
                    reverseData: true,
                    horizontalBars: true,
                    axisY: {
                        offset: 120
                    }
                }
            };
    }
    DashboardComponent.prototype.draw_open_incidences_chart = function () {
        var data = google.visualization.arrayToDataTable([
            ['Appliances', 'New', 'Assigned', 'InProgress', { role: 'annotation' }],
            ['Laundry Care', 10, 44, 20, ''],
            ['Cooking and Baking', 6, 52, 23, ''],
            ['Dishwasher', 18, 39, 9, ''],
            ['Cooling', 5, 12, 10, ''],
            ['Coffee Machines', 8, 4, 12, '']
        ]);
        var options = {
            chartArea: {
                left: 120,
            },
            legend: { position: 'top', maxLines: 3 },
            bar: { groupWidth: '75%' },
            isStacked: true,
            colors: ['#fdcdcd', '#ff5252', '#a70000'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var open_incidences_chart = new google.visualization.BarChart(document.getElementById('open_incidences'));
        open_incidences_chart.draw(data, options);
    };
    DashboardComponent.prototype.customer_suffering_report = function () {
        var data = google.visualization.arrayToDataTable([
            ['Appliances', '#Sufferers'],
            ['Laundry Care', 20],
            ['Cooking and Baking', 55,],
            ['Dishwasher', 32],
            ['Cooling', 45],
            ['Coffee Machines', 8]
        ]);
        var options = {
            chartArea: { width: '50%' },
            hAxis: {
                title: 'Customers Suffering',
                minValue: 0
            },
            vAxis: {
                title: 'Appliances'
            },
            'legend': 'top',
            colors: ['#ff9800'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.BarChart(document.getElementById('customer_suffering_report'));
        chart.draw(data, options);
        google.visualization.events.addListener(chart, 'select', function () {
            var selection = chart.getSelection();
            if (selection.length) {
                var title = data.getValue(selection[0].row, 0);
                var value = data.getValue(selection[0].row, selection[0].column);
            }
            if (title == 'Cooking and Baking')
                $('#cookingSufferers').modal();
        });
    };
    DashboardComponent.prototype.setModalChart = function () {
        console.log('hello');
    };
    DashboardComponent.prototype.incident_weekly_report = function () {
        var data = google.visualization.arrayToDataTable([
            ['Appliances', 'Carry Forward', 'New', 'Closed'],
            ['Laundry Care', 10, 40, 25],
            ['Cooking', 26, 42, 20],
            ['Dishwasher', 2, 9, 12],
            ['Cooling', 15, 22, 10],
            ['Coffee Machines', 3, 4, 2]
        ]);
        var options = {
            chartArea: {
                left: 120,
            },
            hAxis: {
                title: 'Incidents',
            },
            vAxis: {
                title: 'Appliances'
            },
            bar: { groupWidth: '75%' },
            'legend': 'top',
            bars: 'vertical',
            colors: ['#cddc3a', '#8ac34a', '#3a8a3d'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.BarChart(document.getElementById('incident_weekly_report'));
        chart.draw(data, options);
    };
    DashboardComponent.prototype.regions_chart = function () {
        {
            var data_1 = google.visualization.arrayToDataTable([
                ['Province', 'Weekly Open Incidents'],
                ['Rajasthan', 20],
                ['Maharashtra', 200],
                ['Haryana', 30],
                ['Gujarat', 40],
                ['Tamil Nadu', 50],
                ['Nagaland', 10],
                ['Karnataka', 70],
                ['Punjab', 10],
                ['Uttar Pradesh', 15],
                ['Madhya Pradesh', 5],
                ['Andhra Pradesh', 27],
                ['Delhi', 150],
                ['Kerala', 2],
                ['Bihar', 3],
                ['Orissa', 2],
                ['Manipur', 5],
                ['West Bengal', 20],
                ['Meghalaya', 4],
                ['Tripura', 2],
                ['Himachal Pradesh', 10],
                ['Telangana', 45],
                ['Assam', 15],
                ['Chhattisgarh', 45],
                ['Jharkhand', 15],
                ['Jammu and Kashmir', 12]
            ]);
            var options = {
                region: 'IN',
                resolution: 'provinces',
                colorAxis: { colors: ['#01bcd7'] },
                animation: {
                    "startup": true,
                    duration: 600,
                    easing: 'in-out'
                }
            };
            var chart = new google.visualization.GeoChart(document.getElementById('regions_chart'));
            chart.draw(data_1, options);
        }
    };
    DashboardComponent.prototype.incidents_hour = function () {
        var data = google.visualization.arrayToDataTable([
            ['Appliances', 'Customer', 'Support Centre', 'Engineer', 'Repair', { role: 'annotation' }],
            ['Laundry Care', 0.25, 4, 9, 4, ''],
            ['Cooking and Baking', 1, 2, 12, 3, ''],
            ['Dishwasher', 0.5, 3, 7, 5, ''],
            ['Cooling', 0.25, 1, 8, 4, ''],
            ['Coffee Machines', 0.3, 1, 5, 1, '']
        ]);
        var options = {
            chartArea: {
                left: 120,
            },
            legend: { position: 'top', maxLines: 3 },
            bar: { groupWidth: '75%' },
            isStacked: true,
            colors: ['#c370fd', '#9b3aee', '#8e2baa', '#5a0173'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.BarChart(document.getElementById('incedents_hour'));
        chart.draw(data, options);
    };
    DashboardComponent.prototype.repair_time = function () {
        var data = google.visualization.arrayToDataTable([
            ['Appliances', 'Mean time to repair'],
            ['Laundry Care', 2],
            ['Cooking and Baking', 1,],
            ['Dishwasher', 0.5],
            ['Cooling', 2.5],
            ['Coffee Machines', .25]
        ]);
        var options = {
            chartArea: { width: '50%' },
            hAxis: {
                title: 'Mean Time To Repair (in days)',
                minValue: 0
            },
            vAxis: {
                title: 'Appliances'
            },
            'legend': 'top',
            colors: ['#e63935'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.BarChart(document.getElementById('repair_time'));
        chart.draw(data, options);
    };
    DashboardComponent.prototype.sufferers_piechart = function () {
        var data = google.visualization.arrayToDataTable([
            ['Appliance', '#Sufferers'],
            ['Ovens', 11],
            ['Steam Cooking', 2],
            ['Hobs & Cooktops', 2],
            ['Kitchen Chimneys', 2],
            ['Microwaves', 7],
            ['Drawers', 3]
        ]);
        var options = {
            'width': 600,
            'height': 400,
            'legend': 'left',
            is3D: true,
            colors: ['#ea4b59', '#f0954f', '#ffe902', '#bccf01', '#64c6ef', '#009fe3', '#c066a7'],
            animation: {
                "startup": true,
                duration: 600,
                easing: 'in-out'
            }
        };
        var chart = new google.visualization.PieChart(document.getElementById('sufferers_piechart'));
        chart.draw(data, options);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.role = localStorage.role;
        google.charts.load('current', { packages: ['corechart', 'bar'] });
        google.charts.setOnLoadCallback(this.draw_open_incidences_chart);
        google.charts.setOnLoadCallback(this.customer_suffering_report);
        google.charts.setOnLoadCallback(this.incident_weekly_report);
        google.charts.setOnLoadCallback(this.regions_chart);
        google.charts.setOnLoadCallback(this.incidents_hour);
        google.charts.setOnLoadCallback(this.repair_time);
        google.charts.setOnLoadCallback(this.sufferers_piechart);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/data.json":
/***/ (function(module, exports) {

module.exports = {"customer_suffering":{"labels":["Laundry Care","Cooking and Baking","Dishwasher","Cooling","Coffee Machines"],"series":[[20,35,32,45,8]]},"open_incidents":{"labels":["Laundry Care","Cooking and Baking","Dishwasher","Cooling","Coffee Machines"],"series":[[10,6,18,5,8],[44,52,39,12,4],[20,23,9,10,12]]}}

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.nxtlifetechnologies.com\">\n                        NxtLife Technologies\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; 2018, developed by\n            <a href=\"https://www.nxtlifetechnologies.com\" target=\"_blank\">NxtLife Technologies</a> for a better experience.\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Login </h1>\n      <!-- <form> -->\n        <div class=\"form-group\">\n          <label for=\"email\">Email address:</label>\n          <br>\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pwd\">Password:</label>\n          <br>\n          <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"passowrd\" [(ngModel)]=\"password\">\n        </div>\n        <button class=\"btn btn-default\" (click)=\"login()\">Login</button>\n      <!-- </form> -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, appComponent) {
        this.router = router;
        this.appComponent = appComponent;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.username) {
            this.router.navigate(['dashboard']);
        }
    };
    LoginComponent.prototype.login = function () {
        if (this.email == 'ceo@suvidha.com' && this.password == '123456') {
            this.router.navigate(['dashboard']);
            this.appComponent.setUser('Admin', 'CEO', 'ceo@ipsaa.com');
        }
        else if (this.email == 'manager@suvidha.com' && this.password == '123456') {
            this.router.navigate(['dashboard']);
            this.appComponent.setUser('Admin', 'manager', 'manager@ipsaa.com');
        }
        else {
            alert("Invalid credentials.");
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "            <!-- Navbar -->\n            <nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n              <div class=\"container-fluid\">\n                  <div class=\"navbar-wrapper\">\n                      <a class=\"navbar-brand\" href=\"#\">\n                          <span *ngIf=\"role=='CEO'\">\n                            CEO Panel\n                        </span>\n                        <span *ngIf=\"role=='Manager'\">\n                                Manager Panel\n                            </span>\n                      </a>\n                  </div>\n                  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <span class=\"navbar-toggler-icon icon-bar\"></span>\n                      <span class=\"navbar-toggler-icon icon-bar\"></span>\n                      <span class=\"navbar-toggler-icon icon-bar\"></span>\n                  </button>\n                  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n                      <form class=\"navbar-form\">\n                          <div class=\"input-group no-border\">\n                              <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                              <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                                  <i class=\"material-icons\">search</i>\n                                  <div class=\"ripple-container\"></div>\n                              </button>\n                          </div>\n                      </form>\n                      <ul class=\"navbar-nav\">\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link\" href=\"#pablo\">\n                                  <i class=\"material-icons\">dashboard</i>\n                                  <p>\n                                      <span class=\"d-lg-none d-md-block\">Stats</span>\n                                  </p>\n                              </a>\n                          </li>\n                          <li class=\"nav-item dropdown\">\n                              <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                  <i class=\"material-icons\">notifications</i>\n                                  <span class=\"notification\">5</span>\n                                  <p>\n                                      <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                                  </p>\n                              </a>\n                              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                                  <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                                  <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                                  <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                                  <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                                  <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                              </div>\n                          </li>\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link\" href=\"#pablo\">\n                                  <i class=\"material-icons\">person</i>\n                                  <p>\n                                      <span class=\"d-lg-none d-md-block\">Account</span>\n                                  </p>\n                              </a>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n          </nav>\n          <!-- End Navbar -->"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.role = localStorage.role;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\n  <div class=\"logo\">\n      <a href=\"#\" class=\"simple-text logo-normal\">\n          Suvidha Admin Panel\n      </a>\n  </div>\n  <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n          <li class=\"nav-item\" *ngFor=\"let page of list\">\n              <a class=\"nav-link\" [routerLink]=\"page.route\">\n                  <i class=\"material-icons\">{{ page.icon }}</i>\n                  <p>{{ page.name }}</p>\n              </a>\n          </li>\n          <!-- <li class=\"nav-item \">\n              <a class=\"nav-link\" href=\"#\">\n                  <i class=\"material-icons\">person</i>\n                  <p>User Profile</p>\n              </a>\n          </li>\n          <li class=\"nav-item \">\n              <a class=\"nav-link\" href=\"#\">\n                  <i class=\"material-icons\">notifications</i>\n                  <p>Notifications</p>\n              </a>\n          </li>-->\n          <li class=\"nav-item \">\n                <a class=\"nav-link\" (click)=\"logout()\">\n                    <i class=\"material-icons\">content_paste</i>\n                    <p>Logout</p>\n                </a>\n            </li>\n          <li class=\"nav-item active-pro\">\n              <a class=\"nav-link\" href=\"#\">\n                  <i class=\"material-icons\">public</i>\n                  <p>Suvidha</p>\n              </a>\n          </li> \n      </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, appComponent) {
        this.router = router;
        this.appComponent = appComponent;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        if (localStorage.role == 'manager') {
            this.list = [
                {
                    name: 'Dashboard',
                    icon: 'dashboard',
                    route: 'dashboard'
                },
                {
                    name: 'page',
                    icon: 'assignment_returned',
                    route: 'dashboard'
                }
            ];
        }
        if (localStorage.role == 'CEO') {
            this.list = [
                {
                    name: 'Dashboard',
                    icon: 'dashboard',
                    route: 'dashboard'
                }
            ];
        }
    };
    SidebarComponent.prototype.logout = function () {
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        this.router.navigate(['login']);
        this.appComponent.username = null;
        this.appComponent.role = null;
        this.appComponent.email = null;
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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