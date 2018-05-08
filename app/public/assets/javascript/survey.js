$(document).ready(function(){
    console.log("ready");

    $("#survey").submit(function(event){
        event.preventDefault();

        var $form = $(this),
        userName = $form.find("input[name='name']").val(),
        photo = $form.find("input[name='photo']").val(),
        q1 = $form.find("input[name='optionsQ1']:checked").val(),
        q2 = $form.find("input[name='optionsQ2']:checked").val(),
        q3 = $form.find("input[name='optionsQ3']:checked").val(),
        q4 = $form.find("input[name='optionsQ4']:checked").val(),
        q5 = $form.find("input[name='optionsQ5']:checked").val(),
        q6 = $form.find("input[name='optionsQ6']:checked").val(),
        q7 = $form.find("input[name='optionsQ7']:checked").val(),
        q8 = $form.find("input[name='optionsQ8']:checked").val(),
        q9 = $form.find("input[name='optionsQ9']:checked").val(),
        q10 = $form.find("input[name='optionsQ10']:checked").val(),
        url = $form.attr("action");

    var posting = $.post(url, { 
        name: userName, 
        photo: photo, 
        optionsQ1: q1, 
        optionsQ2: q2,
        optionsQ3: q3,
        optionsQ4: q4,
        optionsQ5: q5,
        optionsQ6: q6,
        optionsQ7: q7,
        optionsQ8: q8,
        optionsQ9: q9,
        optionsQ10: q10
    });

    posting.done(function (data) {
        $("#friend-photo").empty();
        $("#myModal").modal();
        $("#new-friend").text(data.name);

        var friendPhoto = $("<img>");
        friendPhoto.attr("src", data.photo);
        friendPhoto.attr("class", "img-responsive center-block");
        $("#friend-photo").append(friendPhoto);
    })
    })
})