
import { component as c } from "../../../../lib/component";
import { A, H1 } from "../../../../lib/components/html";
import { Text } from "../../../../lib/components/text";
import { View } from "../../../../lib/components/view";

const oneLineHeightPaddingTop = { paddingTop: "1.618rem" };

const viewStyle = {};
const headingStyle = { padding: 0, margin: 0, fontWeight: 200 };
// padding: 0,
const textStyle = { margin: 0, fontWeight: 300 };

const sample = (languageName: string, text: string, direction: string = "ltr") => ({
  direction,
  language: languageName,
  text,
});

const loremIpsums = [
  sample("Latin", "Lorem ipsum dolor sit amet, aliquam voluptaria pri no, nec ei harum semper appellantur. Alii graeco prompta ea nec. Duo animal utamur suscipit cu, quem quod patrioque in duo. Quo rebum admodum omittam te. Mea no ullum eligendi referrentur, partiendo scribentur consequuntur sit ad, mei doctus deseruisse ut. Mea debet singulis ad, mea aeque harum blandit ei, mutat iudicabit id pri."),
  sample("Cyrillic (Кири́ллица)", "Лорем ипсум долор сит амет, ет нибх оффициис хис. Еу ессент волумус ехпетенда еам. Ид тибияуе цонституам меи, не виртуте лаореет волуптатибус меи, нонумы аппеллантур не хас. Ут волутпат сцрибентур улламцорпер при."),
  sample("Greek (Ελληνικά)", "Λορεμ ιπσθμ δολορ σιτ αμετ, σεα λιβρισ δεσερθντ περιcθλα αν, νεc διcτασ δενιqθε εξ. Vισ νε ρεβθμ γραεcισ ηονεστατισ, vισ θτ μθνδι qθιδαμ εξπετενδα, αντιοπαμ διγνισσιμ cονσετετθρ vελ αν. Vερο θτροqθε ατ νεc, qθισ qθαεστιο vιτθπερατα θτ."),
  sample("Armenian (Հայերեն)", "լոռեմ իպսում դոլոռ սիթ ամեթ, վել աթ ամեթ վոծենթ պռոպռիաե, ութ նիհիլ մոլեսթիաե ինծոռռուպթե մեի. իդ ծում պռոմպթա նոսթռուդ ալբուծիուս, նո քուաեքուե պեռիծուլիս մել, սեդ ան թոթա ֆեուգիաթ. եա քուո մունդի դիծթաս, իդ դիծո թաթիոն սուավիթաթե եում. ոռաթիո պեռծիպիթուռ եխ նեծ, իուս ան ութինամ գռաեծո սպլենդիդե. իուս վիդիսսե լաբոռես նոնումես նե."),
  sample("Georgian (ქართული)", "ლორემ იფსუმ დოლორ სით ამეთ, ად ელითრ გუბერგრენ სედ, ნო ცორფორა დეფინითიონემ ფრო. უნუმ ნოვუმ ლუდუს ყუი ეა, ეი უთამურ ინსოლენს ინსთრუცთიორ ცუმ. უთ ილლუდ აცცუსამ სით, სუას არგუმენთუმ თე ფრი, მელ ადჰუც მუნდი ფეთენთიუმ ეხ. მელ ეი ჰაბემუს დისსენთიეთ, ეი ნეც ფუთანთ იისყუე ოფორთეათ."),
  sample("Hindi (हिंदी)", "बलवान विषय क्षमता भारतीय हार्डवेर संदेश बाधा हुआआदी गयेगया अर्थपुर्ण गटको सहायता असक्षम बलवान समाजो केवल स्थिति समस्याओ विकसित निरपेक्ष पहोच। पडता चुनने हीकम मेंभटृ विश्वव्यापि सारांश दुनिया सभिसमज विश्व कलइस समाजो प्रमान सभीकुछ करता भाषा डाले। संस्क्रुति विकासक्षमता गुजरना स्वतंत्रता ७हल सक्षम लोगो प्रमान तकनीकी विस्तरणक्षमता तरीके तरहथा। विचारशिलता काम बलवान सीमित असरकारक प्रतिबध वर्ष"),
  sample("Khmer ភាសាខ្មែរ", "ភាសាខ្មែរ ឬខេមរភាសា គឺជាភាសារបស់ ប្រជាជាតិខ្មែរ។ ភាសាសំស្ក្រឹត និងភាសាបាលីបាន​ជួយបង្កើតខេមរភាសា ព្រោះភាសាខ្មែរបានខ្ចីពាក្យច្រើនពីភាសាអស់នោះ។​ភាសាខ្មែរមានអក្សរក្រមវែងជាងគេនៅលើពិភពលោក។​ វាជាភាសាមួយដ៏ចំណាស់​ ដែលប្រហែលជាមានដើមកំណើតតាំងតែពី​ ២០០០ឆ្នាំមុនមកម៉្លេះ។ ភាសាខ្មែរមានអនុភាពលើភាសាថៃ និងភាសាឡាវ។​ភាសាពីរនេះបានខ្ចីពាក្យច្រើនណាស់ពីភាសាខ្មែរដែលនាំឲ្យពួកអឺរ៉ុបស្មានថាវានៅក្នុងក្រុមភាសាដូចគ្នា។ ភាសានោះគឺជារបស់ក្រុមភាសាថៃក្រាដៃនិងភាសាខ្មែរនៅក្រុមភាសាមនខ្មែរជាមួយភាសាមន និងភាសាវៀតណាម ដែលទាក់ទងភាសាសំស្ក្រឹត។"),
  sample("Chinese (繁体)", "逆発無金四入果展負急物米。優格面情捕景教読無少調終要新際愛紹向広。内問訃力週容堀発平肩座郵大農新。作下大宮庭障平提一候動旅。厚購定月教井質攻非亡講注大視存氏行可転表。訪賃報図国旅載高学号数未作述崎属土演。集住刊殺浴旅渉環転午育本紅面。卓写地情利庭正兼達金世原最社辺策。初儀結式法民突関表通適使抜大時宅。"),
  sample("Japanese (日本語), version 1", "紙なうラ少皇つぴよ局中タセイ盗返打はぶ役界ノ組直でなぞぐ提編やレ円整氏セレク入55伊師1易ムヤ形思佳怖のほづる。団さもりぞ上革的応ユチソ最文わせん懲巻格了ス都個テア新系マ谷基どにぞょ温玲ヘカネ見示掲ヨメオヤ料参なゅ図在腕来追らむ。程ツサヲフ法前まにこト掲造せぽド俊5事ぞぽスき使2市ぱイだ生質ね場派ゆすねも本会ねち山鳴桜コレタ迫元年で稿参シソオロ載束ミラノコ歌5当球学減リ。"),
  sample("Japanese (日本語), version 2", "個目保阿譜差鵜夜ゅてハユト遊舳と野模す「るるさゆゃ毛」野ゆつあ都氏れひ素等けハメキサロサタソユちまう夜う樹みに露擢都無ゃしさち、マヘタリラタマうゃゆもふ根御氏留りゆよち素毛留御のらうかっ瀬へひむ。"),
  sample("Japanese (日本語), Jugemu", "パイポパイポ パイポのシューリンガン。やぶら小路の藪柑子、グーリンダイのポンポコピーのポンポコナーの。長久命の長助。水行末 雲来末 風来末。海砂利水魚の、五劫の擦り切れ、寿限無、寿限無。シューリンガンのグーリンダイ、グーリンダイのポンポコピーのポンポコナーの、海砂利水魚の。やぶら小路の藪柑子。シューリンガンのグーリンダイ、水行末 雲来末 風来末。寿限無、寿限無。"),
  sample("Korean/Hangul (한글), version 1", "내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 제2항의 재판관중 3인은 국회에서 선출하는 자를. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다, 국무위원은 국무총리의 제청으로 대통령이 임명한다."),
  sample("Korean/Hangul (한글), version 2", "튼튼하며, 우리 길지 같으며. 없는 인생을 예수는 보내는 커다란 이상은 그리하였는가? 영원히 살 되려니와. 얼음에 봄바람이다. 이것을 하는 얼음에 군영과 청춘이 사랑의 있는가? 그들의 것이 끓는 같은 너의 것이다. 밝은 시들어 가장 품었기 남는 보라, 놀이 찾아 보라. 구할 이상의 무한한 눈이 것이다."),
  sample("(العربية) Arabic", "ضرب بهيئة عشوائية ان, عدم عن صفحة الدّفاع بال في للسيطرة الرئيسية المؤلّفة. كرسي ترتيب لإعادة دول إذ, أم مليارات والإتحاد وفي, حول بسبب لإعادة لم. تعد أراضي الصين وانتهاءً بـ هذا عن حصدت للصين العالم،, بل بال أخرى تعديل الجنرال", "rtl"),
  sample("(עברית) Hebrew", "סדר בכפוף והגולשים על, שתי אם שתפו הגרפים קודמות מה מדע יסוד אספרנטו תוכל פנאי לרפובליקה גם עוד, על אנא בקלות ספרדית מרצועת. שער המלצת אנתרופולוגיה גם כתב פיסול בקרבת בחירות מה, כדי על מוסיקה גיאוגרפיה.", "rtl"),
  sample("L33tspeak", "0R 3|53wh3r3 c0mpu73|2, 7|24n5|4710n h4D, 0u7 +3's d0cum3nt INFoRm4T10N iN. Y3r LINk wh1(h v3r510n 47, y4 4nd 250m (83t4) 3x4|\/|3|\|3d? Kl1x vv0rx vv@nn4 1F d1z. C|1ck p@RticUlAR CaN 1T."),
  sample("Morse code", "--- -· -·-· ··--- --·- ···-- --- -. --· ·- ·--· -···· ·-· · ···· -···· ··· ·· ·--· ---··! · ··- ····- --··· ··· ·· -·· ----- ·····. ·--· --··· -- ·-· ----- --··-- ·-· -. -·-· -··- ---·· ··· ·."),
  sample("Lëtzeburgesch", "Nët jo geet Fläiß grouss? Rëm op Ronn keng, déi en Biereg Faarwen, si Land gehéiert all. Ze ons fest d'Sonn, Ierd Feierwon laanscht gét an, si dem päift d'Loft genuch. D'Blumme d'Stroos ké mir, zwé Haus Mier duerch ké, eng am virun zënter Dohannen. Hu brét Mecht Plett'len net. Derfir Minutt am gét, de gëtt Ronn d'Pied gin, lait Fläiß d'Bëscher dén un?"),
];

const OneLoremIpsum = (props: any, children: any[]) => {
  console.log(textStyle, oneLineHeightPaddingTop, { ...textStyle, ...oneLineHeightPaddingTop});
  return (
    <View style={ { ...viewStyle, ...oneLineHeightPaddingTop, fontSize: "3vmin", margin: "0 auto", maxWidth: "33em" } }>
      <H1 dir={ props.direction } style={ headingStyle }>{ props.language }</H1>
      <Text dir={ props.direction } style={{ ...textStyle, ...oneLineHeightPaddingTop }}>{ props.text }</Text>
    </View>
  );
};

const allTheLoremIpsums = loremIpsums.map((o: any) => <OneLoremIpsum { ...o } />);

export function LoremIpsum(props: any, children: any[]) {
  return (
    <View style={{ ...viewStyle }} { ...props }>
      <View style={{ maxWidth: "33em", fontSize: "3vmin", margin: "0 auto" }}>
        <H1 style={ headingStyle }>🌎 🌍 🌏 Lorem Ipsum 🌎 🌍 🌏</H1>
        <Text style={{ ...textStyle, ...oneLineHeightPaddingTop }}>
          What follows is a long list of Lorem Ipsums in various scripts for multi-lingual typography testing purposes.
          Text samples and order taken from <A href="http://generator.lorem-ipsum.info/" target="_blank">http://generator.lorem-ipsum.info/</A>)
        </Text>
      </View>
      { allTheLoremIpsums }
    </View>
  );
}
