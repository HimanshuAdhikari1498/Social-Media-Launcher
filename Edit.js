var name_text = document.getElementById('name');
var portfolio_link = document.getElementById('portfolio');
var linkedin_link = document.getElementById('linkedin');
var medium_link = document.getElementById('medium');
var twitter_link = document.getElementById('twitter');
var github_link = document.getElementById('github');
var instagram_link = document.getElementById('instagram');
var facebook_link = document.getElementById('facebook');

var submit_button = document.getElementById('submit');

let array = ["name","portfolio","linkedin","medium","twitter","github","instagram","facebook"];
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.name)
            name_text.value=links.name+" ";
        if(links.portfolio)
            portfolio_link.value=links.portfolio;
        if(links.linkedin)
            linkedin_link.value=links.linkedin;
        if(links.medium)
            medium_link.value=links.medium;
        if(links.twitter)
            twitter_link.value=links.twitter;
        if(links.github)
            github_link.value=links.github;
        if(links.instagram)
            instagram_link.value=links.instagram;
        if(links.facebook)
            facebook_link.value=links.facebook;
    }
});


submit_button.addEventListener('click',function(){
    UpdateLinks();
});
function UpdateLinks(){
    let dict = {
        "name":name_text.value,
        "portfolio":portfolio_link.value,
        "linkedin":linkedin_link.value,
        "medium":medium_link.value,
        "twitter":twitter_link.value,
        "github":github_link.value,
        "instagram":instagram_link.value,
        "facebook":facebook_link.value
    }
    chrome.storage.sync.set(dict,function(){
        if(!chrome.runtime.error){
            console.log("Links Updated");
            window.location.pathname='Display.html'
        }
    })
}