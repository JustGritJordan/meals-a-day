/* eslint-disable prefer-arrow-callback */
(function ($) {
 const registerLink = $('#register-link');
 const loginLink = $('#login-link');
 const loginForm = $('#login-wrapper');
 const registerForm = $('#register-wrapper');
 const { pathname } = window.location;
 const body = $('body');
 const main = $('main');
 // const overlay = $('#overlay');

 if (registerLink) {
  registerLink.on('click', function (e) {
   e.preventDefault();
   // loginForm.addClass('animate__animated', 'animate__rotateIn');
   // loginForm.addClass('animate__animated', 'animate__zoomOut', 'animate__delay-1s');
   loginForm.addClass('animate__animated animate__rotateOut animate__delay-1s');
   setTimeout(() => {
    window.location.replace('/register');
    //    loginForm.addClass('animate__animated', 'animate__rotateIn','animate__delay-1s');
   }, 1500);
  });
 }
 if (loginLink) {
  loginLink.on('click', function (e) {
   e.preventDefault();
   registerForm.addClass(
    'animate__animated animate__rotateOut animate__delay-1s'
   );
   //   loginForm.addClass('animate__animated', 'animate__rotateIn');
   //   registerForm.addClass('animate__animated', 'animate__rotateIn');
   setTimeout(() => {
    window.location.replace('/login');
   }, 1500);
  });
 }

 if (pathname === '/login') {
  return (
   body.addClass('bg-primary'),
   main.addClass('bg-secondary text-secondary-emphasis')
  );
 }
 if (pathname === '/register') {
  return (
   body.addClass('bg-danger'), main.addClass('bg-success text-success-emphasis')
  );
 }
 if (pathname === '/dashboard') {
  return (
   body.addClass('bg-warning'),
   main.addClass('bg-secondary-subtle text-secondary-emphasis')
  );
 }
 if (pathname === '/') {
  return (
   body.addClass('bg-info'), main.addClass('bg-danger text-danger-emphasis')
  );
 }
})(jQuery);

// (document.location.pathname === '/login') {
//  overlay.classList.remove = 'bg-success';
//  overlay.addClass = 'bg-warning';
// }
// if (document.location.pathname === '/register') {
//  overlay.classList.remove = 'bg-success';
//  overlay.addClass = 'bg-warning';
// }
