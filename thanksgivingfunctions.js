  //.style.display = none
function intro() {
	document.getElementById("imgc").src = "feastintotextimage.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Next Thursday is Thanksgiving, a day when most people gather and share a meal with family members. However, when family members of multiple generations get together, particularly ones you haven’t seen in awhile, normal conversations can become awkward and uncomfortable very fast. Want to know how much awkwardness you should prepare for this Turkey Day? Follow this handy flowchart to find out.";
	
	document.getElementById("bonec").innerHTML = "Start Here";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("txtc").innerHTML = "Next Thursday is Thanksgiving, a day when most people gather and share a meal with family members. However, when family members of multiple generations get together, particularly ones you haven't seen in awhile, normal conversations can become awkward and uncomfortable very fast. Want to know how much awkwardness you should prepare for this Turkey Day? Follow this handy flowchart to find out.";
	
	document.getElementById("bonec").innerHTML = "Start Here";
	document.getElementById("buttontwo").style.display = "none";
	
	document.getElementById("boneclick").href = "javascript:grandparents();";
}
  
function grandparents() {
	document.getElementById("imgc").src = "Grandparents.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Are your grandparents going to be there?";
	
	document.getElementById("bonec").innerHTML = "Yes";
	document.getElementById("btwoc").innerHTML = "No";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("buttontwo").style.display = "inline-block";
	
	document.getElementById("boneclick").href = "javascript:technology()";
	document.getElementById("btwoclick").href = "javascript:crazy_aunt()";
}

function technology() {
	document.getElementById("imgc").src = "Technology.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Do they use technology?";
	
	document.getElementById("bonec").innerHTML = "Not since the telegraph...";
	document.getElementById("btwoc").innerHTML = "Yes, but not always correctly";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("buttontwo").style.display = "inline-block";
	
	document.getElementById("boneclick").href = "javascript:relationship()";
	document.getElementById("btwoclick").href = "javascript:kardashian()";
}

function crazy_aunt() {
	document.getElementById("imgc").src = "Aunt.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "What about your crazy aunt?";
	
	document.getElementById("bonec").innerHTML = "Yes--she always gets the party started.";
	document.getElementById("btwoc").innerHTML = "Nope";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("buttontwo").style.display = "inline-block";
	
	document.getElementById("boneclick").href = "javascript:cards()";
	document.getElementById("btwoclick").href = "javascript:no_x()";
}

function relationship() {
	document.getElementById("imgc").src = "Relationship.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Are you in a relationship?";
	
	document.getElementById("bonec").innerHTML = "Single as a Pringle";
	document.getElementById("btwoc").innerHTML = "Sure am!";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("buttontwo").style.display = "inline-block";
	
	document.getElementById("boneclick").href = "javascript:continue_relationship()";
	document.getElementById("btwoclick").href = "javascript:cards()";
}

function kardashian() {
	document.getElementById("imgc").src = "kimkbuttreaction.jpg";  //swap image?
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Do they know about that Kim Kardashian #crashtheinternet thing?";
	
	document.getElementById("bonec").innerHTML = "I hope not";
	document.getElementById("btwoc").innerHTML = "Probably....their poor eyes!";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("buttontwo").style.display = "inline-block";
	
	document.getElementById("boneclick").href = "javascript:twitter()";
	document.getElementById("btwoclick").href = "javascript:michael_cera()";
}

function cards() {
	document.getElementById("imgc").src = "cardsagainsthumanity.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Will \"Cards Against Humanity\" be played?";
	
	document.getElementById("bonec").innerHTML = "Yes...(Gulp)";
	document.getElementById("btwoc").innerHTML = "Not if I can help it!";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("buttontwo").style.display = "inline-block";
	
	document.getElementById("boneclick").href = "javascript:captain()";
	document.getElementById("btwoclick").href = "javascript:teach_game()";
}

function no_x() {
	document.getElementById("imgc").style.display = "none";   
	document.getElementById("txtc").style.fontSize = "230%";
	document.getElementById("txtc").innerHTML = "Do you even \"Thanksgiving\"?";
	
	document.getElementById("bonec").innerHTML = "Yeah";
	document.getElementById("btwoc").innerHTML = "No";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("buttontwo").style.display = "inline-block";
	
	document.getElementById("boneclick").href = "javascript:troublemaker_x()";
	document.getElementById("btwoclick").href = "javascript:upset_x()";
}

function continue_relationship() {
	document.getElementById("imgc").style.display = "none";     
	document.getElementById("txtc").style.fontSize = "230%";
	document.getElementById("txtc").innerHTML = "Will they continue to ask if you have a relationship regardless of saying no?";
	
	document.getElementById("bonec").innerHTML = "Of course";
	document.getElementById("btwoc").innerHTML = "No, they'll just question how the University has changed my values.";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("buttontwo").style.display = "inline-block";
	
	document.getElementById("boneclick").href = "javascript:forecast()";
	document.getElementById("btwoclick").href = "javascript:has_it()";
}

function twitter() {
	document.getElementById("imgc").src = "twitter.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "You may not have an awkward Thanksgiving, but expect to answer the question, \"What's a Twitter?\"";
	
	document.getElementById("buttonone").style.display = "none";
	document.getElementById("buttontwo").style.display = "none";
	document.getElementById("startagainbutton").href = "Start Over";
	
	document.getElementById("boneclick").href = "javascript:intro()";
}

function michael_cera() {
	document.getElementById("imgc").src = "image.jpg"; //We have an image...
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "You're going to have the Michael Cera of Thanksgivings. Awkward, strange, and uncomfortable, just like the actor himself.";
	
	document.getElementById("buttonone").style.display = "none";
	document.getElementById("buttontwo").style.display = "none";
	document.getElementById("startagainbutton").style.display = "block";
}

function captain() {
	document.getElementById("imgc").style.display = "none";
	document.getElementById("txtc").style.fontSize = "230%";
	document.getElementById("txtc").innerHTML = "You're asking for an awkward time playing that game. Captain, prepare for awkwardness.";
	
	document.getElementById("buttonone").style.display = "none";
	document.getElementById("buttontwo").style.display = "none";
	document.getElementById("startagainbutton").href = "Start Over";
	
	document.getElementById("boneclick").href = "javascript:intro()";
}

function teach_game() {
	document.getElementById("imgc").style.display = "none";
	document.getElementById("txtc").style.fontSize = "230%";
	document.getElementById("txtc").innerHTML = "Will you try to teach your family a new game that they will ultimately fail to grasp?";
	
	document.getElementById("bonec").innerHTML = "Yes! I mean, come on! \"Settlers of Catan\" is not that hard!";
	document.getElementById("btwoc").innerHTML = "Our only game is seeing who can stay awake the longest after dinner, so no.";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("buttontwo").style.display = "inline-block";
	
	document.getElementById("boneclick").href = "javascript:tensions()";
	document.getElementById("btwoclick").href = "javascript:laid_back()";
}

function troublemaker_x() {
	document.getElementById("imgc").src = "Gobble.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Sorry for doubting you. You have a made up statistic of a 43% chance of awkward. Gobble gobble.";
	
	document.getElementById("buttonone").style.display = "none";
	document.getElementById("buttontwo").style.display = "none";
	document.getElementById("startagainbutton").href = "Start Over";
	
	document.getElementById("boneclick").href = "javascript:intro()";
}

function upset_x() {
	document.getElementById("imgc").src = "shruggingemoticon.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Well, now I just feel bad...I would invite you back with me, but crazy aunt, you know?";
	
	document.getElementById("buttonone").style.display = "none";
	document.getElementById("buttontwo").style.display = "none";
	document.getElementById("startagainbutton").href = "Start ";
	
	document.getElementById("boneclick").href = "javascript:intro()";
}

function forecast() {
	document.getElementById("imgc").src = "weatherturkey.jpg"; // have it?
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Your Thanksgiving forecast is turkey with a large chance of awkward.";
	
	document.getElementById("buttonone").style.display = "none";
	document.getElementById("buttontwo").style.display = "none";
	document.getElementById("startagainbutton").href = "Start Again";
	
	document.getElementById("boneclick").href = "javascript:intro()";
}

function has_it() {
	document.getElementById("imgc").style.display = "none";
	document.getElementById("txtc").style.fontSize = "230%";
	document.getElementById("txtc").innerHTML = "Has it?";
	
	document.getElementById("bonec").innerHTML = "Yes, but I'm just finding myself!";
	document.getElementById("btwoc").innerHTML = "Not really, but my stance on Taylor Swift has changed. Shake it off! Shake it off!";
	document.getElementById("buttonone").style.display = "inline-block";
	document.getElementById("buttontwo").style.display = "inline-block";
	
	document.getElementById("boneclick").href = "javascript:buckle_up()";
	document.getElementById("btwoclick").href = "javascript:TS_DM_x()";
}

function tensions() {
	document.getElementById("imgc").style.display = "none";
	document.getElementById("txtc").style.fontSize = "230%";
	document.getElementById("txtc").innerHTML = "Tensions may run high between you and the fam. Keep your cool and you'll have a great Turkey Day!";
	
	document.getElementById("buttonone").style.display = "none";
	document.getElementById("buttontwo").style.display = "none";
	document.getElementById("startagainbutton").href = "Start Again";
	
	document.getElementById("boneclick").href = "javascript:intro()";
}

function laid_back() {
	document.getElementById("imgc").src = "Thumbs up.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Way to be chill when your family will be cooped up with a limited amount of food! Go you!";
	
	document.getElementById("buttonone").style.display = "none";
	document.getElementById("buttontwo").style.display = "none";
	document.getElementById("startagainbutton").href = "Start Again";
	
	document.getElementById("boneclick").href = "javascript:intro()";
}

function buckle_up() {
	document.getElementById("imgc").src = "Buckle up for awkward.jpg";
	document.getElementById("txtc").style.fontSize = "large";
	document.getElementById("txtc").innerHTML = "Buckle up for awkward. Prepare for a lecture on values and how different the world was \"back in my day.\"";
	
	document.getElementById("buttonone").style.display = "none";
	document.getElementById("buttontwo").style.display = "none";
	document.getElementById("startagainbutton").href = "Start Again";
	
	document.getElementById("boneclick").href = "javascript:intro()";
}

function TS_DM_x() {
	document.getElementById("imgc").style.display = "none";
	document.getElementById("txtc").style.fontSize = "230%";
	document.getElementById("txtc").innerHTML = "You might be able to make it out alive, void of smudgy cheek kisses from your Memaw.";
	
	document.getElementById("buttonone").style.display = "none";
	document.getElementById("buttontwo").style.display = "none";
	document.getElementById("startagainbutton").href = "Start Again";
	
	document.getElementById("boneclick").href = "javascript:intro()";
}//commment