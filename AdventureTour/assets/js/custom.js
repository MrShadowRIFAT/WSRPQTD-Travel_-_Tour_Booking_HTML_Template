(function($) {
  "use strict";
  var supportdesk = {
      initialised: false,
      version: 1.0,
      mobile: false,
      init: function() {
          if (!this.initialised) {
              this.initialised = true;
          } else {
              return;
          }
          this.tr_loader();
          this.tr_nav_menu(); 
          this.tr_fix_menu_scroll();
          this.tr_banner_slider(); 
          this.setAllslider();
          this.testimonial_Slider();
          this.tr_partner_slider(); 
          this.tr_counter();
          this.tr_login_popup();
          this.tr_datepicker();
        },
        // loader js
        tr_loader:function(){
          jQuery(window).on('load', function() {
            $(".tr-loader").fadeOut();
            $(".tr-spin").delay(500).fadeOut("slow");
        });
        },
  // nav menu toggle
      tr_nav_menu: function() {
          $(document).on("click", function(event){
            var $trigger = $(".tr_toggle_btn");
              if($trigger !== event.target && !$trigger.has(event.target).length){
                  $("body").removeClass("tr_menu_open");
              }            
          });
          $(".tr_toggle_btn").click(function(){
            $("body").toggleClass("tr_menu_open");
          });
      },
  // fix menu scroll
      tr_fix_menu_scroll: function() {
        $(window).on('scroll', function () {
          if ($(window).scrollTop() > 300) {
                    $(".tr_menu_wrapper1").addClass("tr-fixed");
              } else {
                  $(".tr_menu_wrapper1").removeClass("tr-fixed");
        }
        });
      },
  // portfolio slider slider
      tr_banner_slider: function() {
        var menu = ["Hiking Tour", "Climb Tour", "City Tour", "Backpacking"];
        var count = ["1", "2", "3", "4"];
        var swiper = new Swiper(".tr_banner_imgslider", {
          // cssMode: true,
          loop: true,
          spaceBetween: 30,
          slidesPerView: 3,
          loopedSlides: 3,
          freeMode: true,
          slideToClickedSlide: true,
          keyboard: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              if(index==4){
                index = 0
              }
              return '<div class="' + className + '"> <span class="tr_bullet_text">' + menu[index] + "</span><span class='tr_bullet_number' >"+count[index]+"</span></div>";
            }
          },
          
        });
        var swiper2 = new Swiper(".tr_banner_fullslider", {
          loop: true,
          keyboard: true,
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          loopedSlides: 3,
        });
      },
      setAllslider: function(){
        const myCustomSlider = document.querySelectorAll(".swiper_common_slider");

        for ( var i=0; i < myCustomSlider.length; i++){
          var slidesPerView = myCustomSlider[i].getAttribute('data-slideperview');
          myCustomSlider[i].classList.add("swiper-container-" + i);
          if(slidesPerView == 4){
            var swiper = new Swiper(".swiper-container-"+ i,{
              slidesPerView: 4,
              spaceBetween: 30,
              loop: true,
              slideShadows: true,
              slideToClickedSlide: true,
              navigation: {
                nextEl: ".swiper-btn-next-" +i,
                prevEl: ".swiper-btn-prev-" +i,
              },
              breakpoints:{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                }, 
                400: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                }, 
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              },
            });
          }
          else{
          var swiper = new Swiper(".swiper-container-"+ i,{
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
              speed: 3500,
              autoplay:{
                delay: 2000,
              },
            slideShadows: true,
            navigation: {
              nextEl: ".swiper-btn-next-" +i,
              prevEl: ".swiper-btn-prev-" +i,
            },
            breakpoints:{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              }, 
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            },
          });
        }
        }
      },

// testimonial slider
      testimonial_Slider:function(){
        var swiper = new Swiper(".tr_test_slider", {
          effect: "coverflow",
          freeMode: 'true',
          slidesPerView: 2,
          clickable: true,
          parallax: true,
          coverflowEffect: {
            rotate: 40,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          },
          pagination: {
            el: ".swiper-pagination1",
            dynamicBullets: true,
            clickable:'true'
          },
          breakpoints:{
            0: {
              slidesPerView: 1,
            }, 
            992: {
              slidesPerView: 2,
            },
          },
        });
      },
      tr_partner_slider: function() {
        var swiper = new Swiper(".tr_partner_slider", {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 20,
          loop: true,
          speed: 3500,
          autoplay:{
            delay: 2000,
          },
          breakpoints:{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            }, 
            576: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            },
        });
      },
      tr_counter: function(){
          $.fn.jQuerySimpleCounter = function (options) {
            var settings = $.extend(
              {
                start: 0,
                end: 100,
                easing: "swing",
                duration: 400,
                complete: "",
              },
              options
            );
        
            var thisElement = $(this);
        
            $({
              count: settings.start,
            }).animate(
              {
                count: settings.end,
              },
              {
                duration: settings.duration,
                easing: settings.easing,
                step: function () {
                  var mathCount = Math.ceil(this.count);
                  thisElement.text(mathCount + "+");
                },
                complete: settings.complete,
              }
            );
          };
        
          $("#counting1").jQuerySimpleCounter({
            end: $("#counting1").data('to'),
            duration: 3000,
          });
          $("#counting2").jQuerySimpleCounter({
            end: $("#counting2").data('to'),
            duration: 3000,
          });
          $("#counting3").jQuerySimpleCounter({
            end: $("#counting3").data('to'),
            duration: 3000,
          });
          $("#counting4").jQuerySimpleCounter({
            end: $("#counting4").data('to'),
            duration: 3000,
          });
      
      },
      tr_login_popup: function(){
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('tr_login_popup');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right_panel_active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right_panel_active");
        });
      },
      tr_datepicker: function(){
        let currentDate = new Date();
        document.addEventListener('DOMContentLoaded', function () {
            currentDate.setDate(currentDate.getDate() + 1);
            flatpickr("#tr_checkin_date, #tr_checkin_date1, #tr_checkin_date2", {
                dateFormat: "d M Y",
                minDate: currentDate,
                defaultDate: [currentDate]
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            currentDate.setDate(currentDate.getDate() + 1);
            flatpickr("#tr_checkout_date, #tr_checkout_date1, #tr_checkout_date2", {
                dateFormat: "d M Y",
                minDate: currentDate,
                defaultDate: [currentDate]
            });
        });
      },
  };
supportdesk.init();

} 
(jQuery));


function checkRequire(formId , targetResp){
  targetResp.html('');
  var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
  var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
  var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
  var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
  var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
  var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
  var check = 0;
  $('#er_msg').remove();
  var target = (typeof formId == 'object')? $(formId):$('#'+formId);
  target.find('input , textarea , select').each(function(){
      if($(this).hasClass('require')){
          if($(this).val().trim() == ''){
              check = 1;
              $(this).focus();
              $(this).parent('div').addClass('form_error');
              targetResp.html('You missed out some fields.');
              $(this).addClass('error');
              return false;
          }else{
              $(this).removeClass('error');
              $(this).parent('div').removeClass('form_error');
          }
      }
      if($(this).val().trim() != ''){
          var valid = $(this).attr('data-valid');
          if(typeof valid != 'undefined'){
              if(!eval(valid).test($(this).val().trim())){
                  $(this).addClass('error');
                  $(this).focus();
                  check = 1;
                  targetResp.html($(this).attr('data-error'));
                  return false;
              }else{
                  $(this).removeClass('error');
              }
          }
      }
  });
  return check;
}

$(".submitForm").on('click', function() {
  var _this = $(this);
  var targetForm = _this.closest('form');
  var errroTarget = targetForm.find('.response');
  var check = checkRequire(targetForm , errroTarget);
  
  if(check == 0){
     var formDetail = new FormData(targetForm[0]);
      formDetail.append('form_type' , _this.attr('form-type'));
      $.ajax({
          method : 'post',
          url : 'ajaxmail.php',
          data:formDetail,
          cache:false,
          contentType: false,
          processData: false
      }).done(function(resp){
          console.log(resp);
          if(resp == 1){
              targetForm.find('input').val('');
              targetForm.find('textarea').val('');
              errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
          }else{
              errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
          }
      });
  }
});

// In your Javascript (external .js resource or <script> tag)
  $(document).ready(function() {
    $('.tr_guest_select').select2({
      minimumResultsForSearch: -1
    });
  })


  $(document).ready(function(){
    $('.tr_tour_icon').click(function(){
      $('.tr_tour_icon').removeClass("likeimg");
      $(this).addClass("likeimg");
    })
  })

document.querySelectorAll('.swiper-slide').forEach(slider => {
  slider.addEventListener('mousemove', function(e) {
    const background = slider.querySelector('.tr_header_slide_img');
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;
    
    if (background) { // Check if background element exists
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;      
      // Apply transform to the background element, not the swiper slide
      // background.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
      $(background).css('transform', `translate3d(-${mouseX}%, -${mouseY}%, 0)`)
    }
  });
});


