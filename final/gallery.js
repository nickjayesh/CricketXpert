function openSideBar() {
    document.getElementById("sideBar").style.width = "250px";
    document.getElementById("navigationBar").style.marginRight = "250px"
  }
  
function closeSideBar() {
    document.getElementById("sideBar").style.width = "0px";
    document.getElementById("navigationBar").style.marginRight = "50px"
}

function setTextColour(getTextColour){
    var setTextColour = getTextColour.getAttribute("data-text-colour");
    document.getElementById("gallery").style.color = setTextColour;
}

function setBackgroundColour(getBackgroundColour){
    var setBackgroundColour = getBackgroundColour.getAttribute("data-background-colour");
    document.getElementById("gallery").style.backgroundColor = setBackgroundColour;
}

function setTextSize(getSize){
    var textSize = getSize.getAttribute("data-text-size");
    document.getElementById("description").style.fontSize = textSize;
}


function setTextSize2(){
    document.getElementById("description").style.fontSize = textSize;
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset; 
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
}

function img1() {
    var newContent = `<h2>FIRST ICC WORLD CUP 1975</h2>
    <img src="images/wcc1975.jpg" alt="wcc1975" srcset="" id="displayedImage">
    <div class="description" id="description" >
		The 1975 Cricket World Cup (officially called the Prudential Cup '75) was the inaugural men’s Cricket World Cup, and the first major tournament in the history of One Day International (ODI) cricket. Organised by the International Cricket Conference (ICC), it took place in England between 7 June and 21 June 1975.
		The tournament was sponsored by Prudential Assurance Company and had eight participating countries: the six Test-playing teams of the time – Australia, England, India, New Zealand, Pakistan, the West Indies and the two leading Associate nations at the time Sri Lanka and East Africa. The teams were divided into two groups of four, with each team playing each other in their group once; the top two from each group qualified for the semi-finals, with the winners of these matches meeting in the final. Each match consisted of 60 overs per team and was played in traditional white clothing and with red balls; all were played and ended in daylight.
		England and New Zealand finished as the top two teams in Group A, while the West Indies finished top of the Group B table ahead of Australia as the four teams qualified through to the semi-finals. After Australia defeated England and the West Indies defeated New Zealand in the semi-finals, the West Indies which came into the tournament as favourites, defeated Australia in the final at Lord's by 17 runs to become the first World Cup winners. New Zealand batsman, Glenn Turner was the top run-scorer for the tournament with 333 runs with Australian bowler Gary Gilmour was the top wicket-taker with 11 wickets.
    </div>
    <div id="backIcon" onclick="backToGallery()"><< Back to Gallery</div>`
    document.getElementById('gallery').innerHTML = newContent
}

function img2() {
    var newContent = `<h2>Marylebone Cricket Club</h2>
    <img src="images/mcc.jpg" alt="christiano" srcset="" id="displayedImage">
    <div class="description" id="description">
		Marylebone Cricket Club (MCC) is a cricket club founded in 1787 and based since 1814 at Lord's Cricket Ground, which it owns, in St John's Wood, London. The club was formerly the governing body of cricket and still holds considerable global influence.
        In 1788, the MCC took responsibility for the laws of cricket, issuing a revised version that year. Changes to these Laws are now determined by the International Cricket Council (ICC), but the copyright is still owned by MCC. When the ICC was created in 1909, it was administered by the secretary of the MCC, and the president of MCC automatically assumed the chairmanship of ICC until 1989.
        For much of the 20th century, commencing with the 1903–04 tour of Australia and ending with the 1976–77 tour of India, MCC organised international tours on behalf of the England cricket team for playing test matches. On these tours, the England team was called MCC in non-international matches. In 1993, its administrative and governance functions were transferred to the ICC and the Test and County Cricket Board (TCCB).
        MCC teams are essentially ad hoc because they have never taken part in any formal competition, but have always held first-class status when playing against first-class opposition. To mark the beginning of each English season, MCC plays the reigning county champions.
        The president of the club is Kumar Sangakkara. He will be succeeded in October 2021 by Clare Connor, the first woman to be president.
	</div>
    <div id="backIcon" onclick="backToGallery()"><< Back to Gallery</div>`
    document.getElementById('gallery').innerHTML = newContent
}

function img3() {
    var newContent = `<h2>Indian Premier League</h2>
    <img src="images/ipl.jpg" alt="messi" srcset="" id='displayedImage'>
    <div class="description" id="description">
		The Indian Premier League (IPL) is a professional Twenty20 cricket league, contested by eight teams based out of eight different Indian cities. The league was founded by the Board of Control for Cricket in India (BCCI) in 2007. It is usually held between March and May of every year and has an exclusive window in the ICC Future Tours Programme.
		The IPL is the most-attended cricket league in the world and in 2014 was ranked sixth by average attendance among all sports leagues. In 2010, the IPL became the first sporting event in the world to be broadcast live on YouTube. The brand value of the IPL in 2019 was ₹475 billion (US$6.7 billion), according to Duff & Phelps. According to BCCI, the 2015 IPL season contributed ₹11.5 billion (US$160 million) to the GDP of the Indian economy. IPL 2020 set a Massive Viewership Record With 31.57 Million Average Impressions and with an overall consumption increase of 23 per cent from 2019 season.
		There have been thirteen seasons of the IPL tournament. The current IPL title holders are the Mumbai Indians, who won the 2020 season. The venue for the 2020 season was moved due to the COVID-19 pandemic and games were played in the United Arab Emirates.
    </div>
    <div id="backIcon" onclick="backToGallery()"><< Back to Gallery</div>`
    document.getElementById('gallery').innerHTML = newContent
}
function img4() {
    var newContent = `<h2>Kumar Sangakkara inducted to ICC Hall of Fame</h2>
    <img src="images/Sanga1.png" alt="quatarstadium" srcset="" id="displayedImage"> 
    <div class="description" id="description">
		Kumar Sangakkara of Sri Lanka played 134 Tests, scored 12,400 runs at 57.40, took 182 catches and 20 stumpings, and was grace personified at the crease. Sangakkara ended his career as the most prolific run-scorer his country had ever known, with double-hundreds flowing from his bat with consummate ease. In 2014 he struck 319 and 105 in the same Test match against Bangladesh and in 2017 fell just 16 runs short of striking six successive centuries in first-class cricket.
		The special edition ICC Hall of Fame show was streamed LIVE on ICC digital channels and was hosted by Alan Wilkins. The show featured interviews with some of the inductees and insights from a specialist panel of guests including Lisa Sthalekar and Lawrence Booth of Wisden. Kumar Sangakkara and Andy Flower also made an appearance on the show, giving their reactions to their entry into this league of legends.
    </div>
    <div id="backIcon" onclick="backToGallery()"><< Back to Gallery</div>`
    document.getElementById('gallery').innerHTML = newContent
}
function img5() {
    var newContent = `<h2>Women's World Cup 2017</h2>
    <img src="images/wcc2017.jpg" alt="womensworldcup" srcset="" id="displayedImage">
    <div class="description" id="description">
 
    </div>
    <div id="backIcon" onclick="backToGallery()"><< Back to Gallery</div>`
    document.getElementById('gallery').innerHTML = newContent
}
function img6() {
    var newContent = `<h2>Cricket World Cup 2019</h2>
    <img src="images/wcc2019.jpg" alt="worldcup2019" srcset="" id="displayedImage">
    <div class="description" id="description">
		The 2019 ICC Cricket World Cup was the 12th Cricket World Cup, a quadrennial One Day International (ODI) cricket tournament contested by men's national teams and organised by the International Cricket Council (ICC). It was hosted between 30 May to 14 July across 10 venues in England and a single venue in Wales with the tournament being the fifth time that England had hosted the World Cup while for Wales it was their third.
		The tournament was contested by 10 teams, a decrease from 14 teams in the previous edition, with the format of the tournament changing to a single round-robin group with the top four teams qualifying through to the knockout stage. After six weeks of round-robin matches, which saw four games not have a result, India, Australia, England and New Zealand finished as the top four, with Pakistan missing out on net run rate.
		In the knockout stage, England and New Zealand won their respective semi-finals to qualify for the final, which was played at Lord's in London. The final ended in a tie after the match ended with both teams scoring 241 runs, followed by the first Super Over in an ODI; England won the title, their first, on the boundary countback rule after the Super Over also finished level. The total attendance throughout the 2019 ICC Cricket World Cup was 752,000. Overall, videos of the group stages amassed over 2.6 billion views from around the world, making it the most-watched cricket competition as of 2019
    </div>
    <div id="backIcon" onclick="backToGallery()"><< Back to Gallery</div>`
    document.getElementById('gallery').innerHTML = newContent
}
function backToGallery(){
var galleryContent =
`<div id="img1" class="thumbnail" onclick="img1()">
    <img src="images/wcc1975.jpg" alt="" srcset="" class="ThumbnailImage">
    <div class="thumbnailTitle">
        FIRST ICC WORLD CUP 1975 <br> <br>
        <div class="hiddenText">View Story >></div>
    </div>
</div>
<div id="img2" class="thumbnail" onclick="img2()">
    <img src="images/mcc.jpg" alt="" srcset="" class="ThumbnailImage" >
    <div class="thumbnailTitle">
        Marylebone Cricket Club
        <div class="hiddenText">View Story >></div>
    </div>
</div>
<div id="img3" class="thumbnail" onclick="img3()">
    <img src="images/ipl.jpg" alt="" srcset="" class="ThumbnailImage" >
    <div class="thumbnailTitle">
        Indian Premier League
        <div class="hiddenText">View Story >></div>
    </div>
</div>
<div id="img4" class="thumbnail" onclick="img4()">
    <img src="images/Sanga.jpg" alt="" srcset="" class="ThumbnailImage" >
    <div class="thumbnailTitle">
        Kumar Sangakkara inducted to ICC Hall of Fame <br> <br>
        <div class="hiddenText">View Story >></div>
    </div>
</div>
<div id="img5" class="thumbnail" onclick="img5()">
    <img src="images/wcc2017.jpg" alt="" srcset="" class="ThumbnailImage" >
    <div class="thumbnailTitle">
        Women's World Cup 2017
        <div class="hiddenText">View Story >></div>
    </div>
</div>
<div id="img6" class="thumbnail" onclick="img6()">
    <img src="images/wcc2019.jpg" alt="" srcset="" class="ThumbnailImage" >
    <div class="thumbnailTitle">
        Cricket World Cup 2019 <br> <br>
        <div class="hiddenText">View Story >></div>
    </div>
</div>`
document.getElementById("gallery").innerHTML = galleryContent;
}