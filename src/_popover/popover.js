/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module('mm.foundation.popover', ['mm.foundation.tooltip'])

.directive('popoverPopup', function() {
    'ngInject';
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            title: '@',
            content: '@',
            placement: '@',
            animation: '&',
            isOpen: '&'
        },
        templateUrl: 'template/popover/popover.html'
    };
})

.directive('popover', function($tooltip) {
    'ngInject';
    return $tooltip('popover', 'popover', 'click');
});
