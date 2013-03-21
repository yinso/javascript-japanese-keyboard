var J2R ={'あ':'a','い':'i','う':'u','え':'e','お':'o','か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko','さ':'sa','し':'shi','す':'su','せ':'se','そ':'so','た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to','な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no','は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho','ま':'ma','み':'mi','む':'mu','め':'me','も':'mo','や':'ya','ゆ':'yu','よ':'yo','ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro','わ':'wa','を':'wo','ん':'n','が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go','ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo','だ':'da','ぢ':'ji','づ':'du','で':'de','ど':'do','ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo','ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po','きゃ':'kya','きゅ':'kyu','きょ':'kyo','しゃ':'sha','しゅ':'shu','しょ':'sho','ちゃ':'cha','ちゅ':'chu','ちょ':'cho','にゃ':'nya','にゅ':'nyu','にょ':'nyo','ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo','みゃ':'mya','みゅ':'myu','みょ':'myo','りゃ':'rya','りゅ':'ryu','りょ':'ryo','ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo','じゃ':'ja','じゅ':'ju','じょ':'jo','びゃ':'bya','びゅ':'byu','びょ':'byo','ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo','っ':'ltu','ア':'a','イ':'i','ウ':'u','エ':'e','オ':'o','カ':'ka','キ':'ki','ク':'ku','ケ':'ke','コ':'ko','サ':'sa','シ':'shi','ス':'su','セ':'se','ソ':'so','タ':'ta','チ':'chi','ツ':'tsu','テ':'te','ト':'to','ナ':'na','ニ':'ni','ヌ':'nu','ネ':'ne','ノ':'no','ハ':'ha','ヒ':'hi','フ':'fu','ヘ':'he','ホ':'ho','マ':'ma','ミ':'mi','ム':'mu','メ':'me','モ':'mo','ヤ':'ya','ユ':'yu','ヨ':'yo','ラ':'ra','リ':'ri','ル':'ru','レ':'re','ロ':'ro','ワ':'wa','ヲ':'wo','ン':'n','ガ':'ga','ギ':'gi','グ':'gu','ゲ':'ge','ゴ':'go','ザ':'za','ジ':'ji','ズ':'zu','ゼ':'ze','ゾ':'zo','ダ':'da','ヂ':'ji','ヅ':'du','デ':'de','ド':'do','バ':'ba','ビ':'bi','ブ':'bu','ベ':'be','ボ':'bo','パ':'pa','ピ':'pi','プ':'pu','ペ':'pe','ポ':'po','キャ':'kya','キュ':'kyu','キョ':'kyo','シャ':'sha','シュ':'shu','ショ':'sho','チャ':'cha','チュ':'chu','チョ':'cho','ニャ':'nya','ニュ':'nyu','ニョ':'nyo','ヒャ':'hya','ヒュ':'hyu','ヒョ':'hyo','ミャ':'mya','ミュ':'myu','ミョ':'myo','リャ':'rya','リュ':'ryu','リョ':'ryo','ギャ':'gya','ギュ':'gyu','ギョ':'gyo','ジャ':'ja','ジュ':'ju','ジョ':'jo','ビャ':'bya','ビュ':'byu','ビョ':'byo','ピャ':'pya','ピュ':'pyu','ピョ':'pyo','ッ':'ltu'}

var kanji;
function $d(){return document;}
function $(e){return $d().getElementById(e);}
function $v(v){return $(v).value; }
function $n(n){return $d().getElementsByName(n); }
function addToTb(rstr){	$("source").value+=rstr;}
function  addToTa(){$("ta").value+=$v("source");$("source").value="";}

function bs(){
	var tav = $v("source");
	if(tav.length>0){
	$("source").value=tav.substring(0,tav.length-1);
	}
}

function change2roman(jstr){
	var temp='';
	if(jstr.length == 1){
		temp+=J2R[jstr];
	}else{
		for(var i=0;i<jstr.length;i++){
			if(i+1 <= jstr.length){
				if('ゃゅょャュョ'.indexOf(jstr[i+1]) != -1){
					temp+=J2R[jstr[i]+jstr[i+1]];
					i++;
				}else{
					temp+=J2R[jstr[i]];
				}
			}
		}
	}
	return temp;
}

function convert(){
	var str = $v("source");

	if(str.match(/^[\u3040-\u30FF]+$/)){
		str=change2roman(str);
	}

	var temp = kanji[str];

	if(typeof temp != "undefined"){
		while(menuobj.firstChild){
			menuobj.removeChild(menuobj.firstChild);
		}

		var element;

		for(i=0;i<temp.length;i++){
			element = document.createElement('div');
			element.innerHTML=temp[i];
			element.setAttribute("onclick", "selectKanji(this);"); 
			menuobj.appendChild(element);
		}

		menuobj.style.top=$("frm").offsetTop+$("source").offsetTop + $("source").offsetHeight;
		menuobj.style.left=$("frm").offsetLeft + $("source").offsetLeft;
		menuobj.style.visibility="visible"
	}
}

function changeKeyboard(){
	if($('key1').style.display == 'none' && $('key2').style.display == 'none'){
		$('key1').style.display = 'block';
		$('nkey').style.display = 'block';
		$('key3').style.display = 'none';
	}else if($('key2').style.display == 'none' && $('key3').style.display == 'none'){
		$('key2').style.display = 'block';
		$('nkey').style.display = 'block';
		$('key1').style.display = 'none';
	}else if($('key1').style.display == 'none' && $('key3').style.display == 'none'){
		$('key3').style.display = 'block';
		$('key2').style.display = 'none';
		$('nkey').style.display = 'none';
	}
}

function init(){
	
	httpObj = new XMLHttpRequest();

	if(httpObj){
			httpObj.onreadystatechange = function() {
	        if(httpObj.readyState == 4 && (httpObj.status == 200 || httpObj.status == 0)) {
						var temp=JSON.parse(httpObj.responseText);
						kanji=temp.kanji[0];
	        }
	      }
	   httpObj.open("get","./jjkdata.js",true);
	   httpObj.send(null);
	}else{
		alert("httpObj not found");
	}
}

function selectKanji(tar){
	var selectElement	 = tar;

	menuobj.style.visibility="hidden";
	$("source").value=selectElement.innerHTML;
}