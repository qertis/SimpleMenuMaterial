angular.module('app.controllers', [])
	.controller('LoginCtrl', function ($scope, $state, IdentityService) {

		$scope.login = ''
		$scope.password = ''

		$scope.$watch(function (scope) {
			return scope.login
		}, function (value) {
			//compareValues()
		})

		$scope.$watch(function (scope) {
			return scope.password
		}, function (value) {
			//compareValues()
		})

		function compareValues() {
			if ($scope.login === 'qwe' && $scope.password === '123') {
				IdentityService.identidy = {user: 'testUser', token: '123'};

				$state.go('menu')
			}
		}

		$scope.signUp = function () {

		}

		$scope.signIn = function () {
			compareValues();
		}

	})

	.controller('MenuCtrl', function ($scope, $state, $timeout, $mdSidenav, IdentityService) {

		$scope.emails = ['draswinratheesh@gmail.com'];

		$timeout(function () {
			if (IdentityService.identidy.token !== '123') {
				$state.go('login')

				return
			}

			$scope.posts = [
				'text1',
				'text2'
			]

			//$scope.emails.push('111@gmail.com')

			// lazy load open sidenav
			$timeout(function () {
				$mdSidenav('left').open()
			}, 800)

		}, 0)

		$scope.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle()
		}

		$scope.logOut = function () {
			IdentityService.identidy = {}
			$state.go('login')
		}

	})