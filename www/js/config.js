angular.module('app.config', [
	'ui.router'
])

	.config(function ($mdThemingProvider) {
		$mdThemingProvider.definePalette('amazingPaletteName', {
			'50': 'ffff00',
			'100': 'ffff00',
			'200': 'ffff00',

			'300': 'ffff00',

			'400': '038b98',

			'500': '00b2c3',

			'600': 'ffff00',
			'700': 'ffff00',
			'800': 'ffff00',

			'900': 'ffffff',
			'A100': 'ffffff',
			'A200': 'ffffff',
			'A400': 'ffffff',
			'A700': 'ffffff',


			'contrastDefaultColor': 'light',
			'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
			'contrastLightColors': undefined
		})
			.theme('default')
			.primaryPalette('amazingPaletteName')
	})

	.config(function ($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/login")
		//
		// Now set up the states
		$stateProvider
			.state('login', {
				url: "/login",
				templateUrl: "templates/login.html"
			})
			.state('menu', {
				url: "/menu",
				templateUrl: "templates/menu.html"
			})

	})