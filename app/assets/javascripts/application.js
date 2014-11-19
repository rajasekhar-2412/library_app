// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .


$(document).ready(function(){
    $("#text").hide();
});

$('#user_password').keyup(function(e) {
    $("#text").show();
    $('#passstrength').show();
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    if (false == enoughRegex.test($(this).val())) {
        $('#passstrength').removeClass('strong').removeClass('medium').html('Too Short');
    } else if (strongRegex.test($(this).val())) {
        $('#passstrength').html('Strong!').removeClass('medium').addClass('strong');
    } else if (mediumRegex.test($(this).val())) {
        $('#passstrength').html('Medium!').removeClass('strong').addClass('medium');
    } else {
        $('#passstrength').removeClass('strong').removeClass('medium').html('Weak!');
    }
    return true;
});

$('#user_password').blur(function() {
    $("#text").hide();
    $('#passstrength').hide();
});

$('#user_password_confirmation').keyup(function() {
    $('#passwd_check').show();
    var pwd = $('#user_password').val();
    if ($(this).val() == pwd){
        $('#passwd_check').html('Passwords Matching').removeClass('error').addClass('strong');
    }
    else if (pwd == '') {
        $('#passwd_check').html('Password should not be empty').removeClass('strong').addClass('error');
    }
    else{
        $('#passwd_check').html('Confirmation Password Not Matching With Password').addClass('error');
    }
});

$('#user_password_confirmation').blur(function() {
    $('#passwd_check').hide();
});