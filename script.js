var quote =["the purpose of our Lives is to be happy be happy my love",
"life is what happens when you are busy making other plans-John Lennon",
"Get busy living or get busy dying-Stephen King",
"everything happens for a reason-Palesa2lo",
"You are where you are supposed to be, to get where you should be",
"Theres nothing small about you baby girl shine-Palesa2lo",
"Sometimes you can do everything right..and still not win-Palesa thulo",
"People change, feelings fade aways...its Okay, You not a bad person-Palesa2lo",
"Failing is only..when you give up...Try again sweetheart-Palesa2lo",
"You only live once, but if you do it right, ONCE IS ENOUgh-Mae WEst",
"Love is a beautiful thing, if you dont fight for love then fight for hapiness",

"Many of lifes failures are people who did not realise how close they were to success when they gave up-Thomas A Edison"];

function getquote()
{
    var randomNumber = Math.floor(Math.random()*quote.length)
    document.getElementById('newQuoteSection').innerHTML=quote[randomNumber];
}