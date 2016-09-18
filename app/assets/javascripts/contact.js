/**
 * Created by yoshi on 2016/09/18.
 */


function sendContact() {
    var name = $('#contact_name').val();
    var email = $('#contact_email').val();
    var content = $('#contact_content').val();

    if ( name != '' && email != '' && content != '') {
        console.log('send');
        $.ajax({
            url: "https://api.sparkpost.com/api/v1/transmissions",
            method: "POST",
            headers: {
                'Authorization': '4470a46351fb1d9c6e99575a17209cada5abbc85',
                'Content-Type': 'application/json'
            },
            data: {
                "content": {
                    "from": "info@star-mothers.com",
                    "subject": "Test Email",
                    "text":"This is test email by yoshihito"
                },
                "recipients": [{"address": "yoshihito522@gmail.com"}]
            }
        }).done(function(data){
            alert('success!!');
        }).fail(function(data){
            alert('error!!!');
        });
    }
}
