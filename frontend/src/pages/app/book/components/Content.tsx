import styled from "styled-components";
import TableOfContents from "./TableOfContents";
import Quiz from "./Quiz";
import {
  Header,
  SubHeader,
  Text,
  List,
  ListElement,
  ListHeader,
  PhotoContainer,
} from "./Styles";
import PhotoWithCaption from "./PhotoWithCaption";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../images";
import { respondTo } from "../../../../utils/helpers/_respondTo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 60px;
  max-width: 1400px;

  color: var(--white);
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  flex-direction: column;
  width: 100%;

  ${respondTo.mobile`
      padding: 40px 20px;
  `}
`;

function Content() {
  return (
    <Container className="w3-animate-left">
      <TableOfContents />
      <Header id="Introduction">შესავალი</Header>
      <SubHeader id="OrganChemistrySubject">
        ორგანული ქიმიის საგანი და ამოცანები
      </SubHeader>
      <Text>
        ორგანული ქიმია, როგორც მეცნიერება, ჩამოყალიბდა XVIII საუკუნეში.ამ დროს
        ანსხვავებდნენ ცხოველური, მცენარეული და მინერალური წარმოშობის
        ნივთიერებათა შემსწავლელ ქიმიას
      </Text>
      <Text>
        ორგანული ქიმია შეისწავლის ნაერთებს , რომელთა შემადგენლობაში შედის
        ნახშირბადი, გარდა ნახშირბადის ოქსიდებისა და ნახშირმჟავას მარილებისა. XIX
        საუკუნის პირველ ნახევარში ის გაფორმდა როგორც მეცნიერების დარგი. ამ დროს
        მეცნიერებაში გავრცელებული იყო ვიტალისტური თეორია, რომელიც აღიარებდა
        ზებუნებრივი სასიცოცხლო ძალის არსებობას. 1828 წ.გერმანელმა მეცნიერმა
        ველერმა ამონიუმის ციანიდიდან მიიღო ორგანული ნაერთი შარდოვანა,
      </Text>
      <Text>
        1854 წ. ფრანგმა ბერტლომ კი ცხიმი. 1861 რუსმა მეცნირმა ბუტლეროვმა
        დაასინთეზა ნივთიერება . რომელიც მიეკუთვნებოდა შაქრების კლასს და ამას
        ყველაფერს სჭირდებოდა თეორიული განმტკიცება. ისტორიულად ორგანულ ქიმიაში
        პირველ თეორიას წარმოადგენს რადიკალების თეორია(ჟ. დიუმა და ი. ბერცელიუსი)
        . შემდეგი იყო ტიპების თეორია(ო.ლორანი. შ.ჟერარი. ჟ, დიუმა) და საბოლოოდ
        ა.ბუტლეროვის ორგანულ ნაერთთა აღნაგობის თეორია.ცოტა ხნით ადრე კეკულესა და
        კოლბეს მიერ დასაბუთებულ იქნა, რომ ორგანულ ნაერთებში ნახშირბადი არის
        ოთხვალენტოვანი. ა.ბუტლეროვის ორგანულ ნაერთთა აღნაგობის თეორია 1861 წლის
        19 სექტემბერს იქნა გახმოვანებული გერმანელ ბუნებისმეტყველთა ყრილობაზე.{" "}
        რომელიც მოიცავს შემდეგ დებულებებს:
      </Text>
      <List id="OrganChemistryProvisions">
        <ListElement>
          ორგანულ ნაერთთა მოლეკულებში ყველა ატომი განლაგებულია გარკვეული
          თანაფარდობით მათი ვალენტობის შესაბამისად.,მათი ადგილის შეცვლა
          გამოიწვევს ახალი ნივთიერების წარმოქმნას ახალი თვისებებით. მაგ. სპირტი
          და ეთერი
        </ListElement>
        <ListElement>
          ქიმიური ნივთიერებების თვისებები დამოკიდებულია მათ აღნაგობაზე. ქიმიური
          აღნაგობა კი არის ატომთა გარკვეული თანმიმდევრობა მოლეკულაში,როდესაც
          ისინი ერთმანეთზე ახდენენ გავლენას,ეს განაპირობებს მათ ქიმიურ და
          ფიზიკურ თვისებებს.
        </ListElement>
        <ListElement>
          ნივთიერებათა თვისებების შესწავლა იძლევა საშუალებას მათი აღნაგობის
          განსაზღვრისა, ხოლო აღნაგობა განაპირობებს მათ თვისებებს.
        </ListElement>
        <ListElement>
          ნახშირბადის ატომებს აქვთ უნარი შეუერთდნენ ერთმანეთს და წარმოქმნან
          ნახშირბადოვანი ჯაჭვი. ჯაჭვი შეიძლება იყოს ღია ან შეკრული, სწორი ან
          დატოტვილი, ნაჯერი ან უჯერი.
        </ListElement>
        <ListElement>
          ყველა ორგანულ ნაერთს აქვს ერთი სტრუქტურული ფორმულა . რომელიც ემყარება
          ნახშირბადის ოთხვალენტოვნებას.
        </ListElement>
      </List>

      <Header id="OrganChemistry">ორგანული ქიმია</Header>
      <SubHeader id="alcens">ალკენები (ოლეფინები)</SubHeader>
      <Text>
        ალკენები ანუ ოლეფინები, ეთილენის რიგის ნახშირწყალბადები ეწოდება
        ნახშირწყალბადებს , რომლებიც შეიცავენ მოლეკულაში ერთ ორმაგ ბმას და მათი
        საერთო ფორმულაა C<sub>n</sub>H<sub>2n</sub>.
      </Text>
      <Text>
        ოლეფინების რიგის ნახშირწყალბადებს ჯაჭვთან დაკავშირებული იზომერიის გარდა,
        ახასიათებს ორმაგი ბმის მდებარეობის იზომერია.ამასთანავე ოლეფინებში ადგილი
        აქვს სივრცული იზომერიის სახეს გეომეტრიულ ანუ ცის-ტრანს
        იზომერიას.ცის-ტრანს იზომერია განპირობებულია ორმაგი ბმის გარშემო
        ნახშირბადის ატომების შეზღუდული ბრუნვით.
      </Text>
      <PhotoWithCaption src={Image1} caption="" alt="" />
      <Text>
        მოცემულ მაგალითში მეთილის ჯგუფები შეიძლება არსებობდეს როგორც ორმაგი ბმის
        ერთ მხარეს (ეს არის ცის- იზომერია), აგრეთვე ორმაგი ბმის განსხვავებულ
        მხარეს(ეს არის ტრანს- იზომერია). იზომერიის სახელწოდებები წარმოსდგება
        ლათინური cis - ამ მხარეს და trans-მეორე მხარეს.მათი ურთიერთგადასვლა
        ხდება ორმაგი ბმის გაწყვეტის ხარჯზე.
      </Text>

      <List>
        <ListHeader>მიღება:</ListHeader>

        <ListElement>
          ძირითადი წყარო ალკენების სამრეწველო მიღებისა არის აირები, რომლებიც
          მიიღება ნავთობპროდუქტების კრეკინგისა და პიროლიზისას. ამ ნედლეულიდან
          მიიღება ჰომოლოგიური რიგის პირველი ოთხი წევრი(ეთილენი. პროპილენი,
          ბუტილენი. პენტილენი). ქვანახშირის კოქსვისას მიღებული აირი კი
          გამოიყენება მხოლოდ ეთილენის და პროპილენის მისაღებად. აირი, მიღებული
          ნავთობპროდუქტების კრეკინგის და პიროლიზისას შეიცავს 15- დან 30%- მდე
          ოლეფინებს.
        </ListElement>
        <ListElement>
          ალკენების უფრო მნიშვნელოვანი რაოდენობა მიიღება ალკანების
          დეჰიდროგენიზაციით კატალიზატორის თანაობისას, მაღალი ტემპერატურის
          პირობებში.
          <PhotoWithCaption src={Image2} caption="" alt="" />
        </ListElement>
        <ListElement>
          ლაბორატორიულ პირობებში გავრცელებულია ალკენების მიღება სპირტების
          დეჰიდრატაციით (წყლის მოხლეჩით)მათი გახურებით წყალწამრთმევი
          საშუალებების (კონც. გოგირდმჟავასთან ან ფოსფორმჟავასთან) თანაობისას ან
          კატალიზატორზე (ალუმინის ოქსიდი) მისი ორთქლის გატარებით.
          <PhotoWithCaption src={Image3} caption="" alt="" />
          მეორეული და მესამეული სპირტების დეჰიდრატაცია განისაზღვრება ა. მ.
          ზაიცევის მეთოდით. სპირტებიდან წყლის მოხლეჩისას წყალბადი სცილდება უფრო
          ნაკლებად ჰიდროგენიზირებული ნახშირბადიდან.
        </ListElement>
        <ListElement>
          ხშირად ალკენები მიიღება ჰალოგენალკანებიდან ჰალოგენწყალბადის მოხლეჩით,
          ტუტის სპირტული ხსნარის დამატებისას. ამ რეაქციის მიმდინარეობაც
          ექვემდებარება ზაიცევის წესს.
          <PhotoWithCaption src={Image4} caption="" alt="" />
        </ListElement>
      </List>

      <Text>
        ფიზიკური თვისებებით ეთილენის რიგის ნახშირწყალბადები ძალიან ჰგვანან
        ალკანებს.ნორმალურ პირობებში C2–C4 –გაზებია, C5–C17 – სითხეებია, უმაღლესი
        წარმომადგენლები კი – მყარი ნივთიერებებია.მათი დუღილის და ლღობის
        ტემპერატურა, აგრეთვე სიმკვრივე მოლეკულური მასის მატებასთან ერთად
        მატულობს.ყველა ოლეფინი წყალზე უფრო მსუბუქია, არ იხსნება მასში,მაგრამ
        ხსნადია ორგანულ გამხსნელებში. ზოგიერთი ალკენის ფიზიკური თვისებები
        მოცემულია შემდეგ ცხრილში.
      </Text>

      <SubHeader id="etilen">ეთილენის მოლეკულის განლაგება</SubHeader>
      <Text>
        გამოსახულება საბოლოოდ თითოეულ ნახშირბადის ატომს გააჩნია სამი ჰიბრიდული
        ორბიტალი, რომლებიც მდებარეობენ ერთ სიბრტყეში და ერთმანეთის მიმართ 120º
        კუთხით,ხოლო არაჰიბრიდული ორბიტალი მდებარეობს ჰიბრიდული ორბიტალების
        მიმართ პერპერდიკულარულ სიბრტყეში.ერთ-ერთი ჰიბრიდული ორბიტალი გადაიფარება
        მეორე ნახშირბადის მსგავსი ორბიტალით ატომგულების შემაერთებელი ღერძის
        გასწვრივ და წარმოქმნის p- ბმას,ნახშირბადის ატომის დანარჩენი ჰიბრიდული
        ღრუბლებით კი წარმოიქმნიან p- ბმებს წყალბადის ატომებთან. არაჰიბრიდული p
        ორბიტალი კი გადაიფარება გვერდულად და წარმოქმნიან p- ბმას, მათი
        მაქსიმალური სიმკვრივე მდებარეობს p-ბმის პერპერდიკულარულ სიბრტყეში.აქედან
        გამომდინარე, ორმაგი ბმა შედგება p- და p-ბმისაგან. p- ბმა ნაკლებად
        მტკიცეა , ვიდრე p- ბმა, რადგანაც p-ორბიტალების ვერტიკალურად გადაფარვა
        ნაკლებად ხდება. ამიტომ მათი გაწყვეტაც უფრო ადვილად მიმდინარეობს და
        მიერთებაც,შესაბამისად მათ უფრო ხშირად ახასიათებთ მიერთების რეაქცია.
        მიერთების რეაქციაში ორმაგი ბმა გამოდის ელექტრონების დონორი, რის გამოც
        მიერთება არის ელექტროფილური ტიპის.
      </Text>
      <List>
        <ListElement>
          ჰალოგენირება. ალკენები ჩვეულებრივ პირობებში იერთებენ ჰალოგენებს და
          გადადიან დიჰალოგენნაწარმებში.
          <br />H<sub>2</sub>C = CH<sub>2</sub> + Br<sub>2</sub> {"->"} BrCH
          <sub>3</sub> {"->"} CH<sub>2</sub>Br (1,2-დიბრომმეთანი)
          <br />
          მოცემული რეაქცია - ბრომიანი წყლის გაუფერულება- არის თვისობრივი რეაქცია
          ორმაგი ბმისათვის.
        </ListElement>
        <ListElement>
          ჰიდრირება. ალკენები ადვილად იერთებენ წყალბადს კატალიზატორის თანაობისას
          (Pt, Pd, Ni), მიიღება ნაჯერი ნახშირწყალბადები
          <br />
          CH<sub>3</sub>-CH = CH<sub>2</sub> + H<sub>2</sub> {"->"} CH
          <sub>3</sub>-CH<sub>2</sub>-CH<sub>3</sub> (პროპანი)
        </ListElement>
        <ListElement>
          ჰიდროჰალოგენირება.ეთილენი და მისი ჰომოლოგები მიიერთებენ
          ჰალოგენწყალბადს და მიიღება ჰალოგენნაწარმი.
          <br />H<sub>2</sub>C = CH<sub>2</sub> + HBr {"->"} CH
          <sub>3</sub>-CH<sub>2</sub>Br (ბრომეთანი)
          <br />
          ჰალოგენწყალბადის მიერთება ალკენებთან ხდება მარკოვნიკოვის წესის
          მიხედვით (წყალბადი მიუერთდება ორმაგ ბმასთნ არსებულ ყველაზე
          ჰიდროგენიზირებულ ნახშირბადთან)
        </ListElement>
      </List>

      <SubHeader id="alcen2">ალკენებთან ელექტროფილური მიერთება</SubHeader>
      <Text>
        ორმაგი ბმა ალკენებში ადვილად პოლარიზდება ჩამნაცვლებლის
        გავლენით.განვიხილოთ მეთილის ჯგუფის და ფტორის ატომის გავლენა ორმაგი ბმის
        ელექტრონული სიმკვრივის გადანაწილებაზე.
      </Text>
      <Text>
        ეთილენის მოლეკულაში რადგანაც მოლეკულა სიმეტრიულია ,ელექტრონული სიმკვრივე
        გადანაწილებულია თანაბრად.ელექტრო -დონორული ჩამნაცვლებელი (მეთილის ჯგუფი)
        ორმაგი ბმის ელექტრონულ სიმკვრივეს გადასწევს არაჩანაცვლებული ატომისაკენ,
        რის გამოც ნახშირბადის ატომებზე განვითარდება მუხტი. ელექტრო-აქცეპტორული
        ჩამნაცვლებლის შემთხვევაში (ფტორის ატომი) ელექტრონული სიმკვრივე
        გადაწეულია ფტორის ატომჩანაცვლებულ ნახშირბადთან.ქლორწყალბადის მიერთება
        არასიმეტრიულ ნახშიბადის ატომებთან მიდის მარკოვნიკოვის წესის მიხედვით
      </Text>
      <Text>
        CH<sub>3</sub>−CH=CH<sub>2</sub> + HCl {"->"} CH<sub>3</sub>−CH−CH
        <sub>3</sub>-Cl
      </Text>
      <Text>
        განვიხილოთ ამ რეაქციის მექნიზმი.საწყის სტადიაზე ხდება ქლორწყალბადის
        დისოციაცია წყალბადის პროტონად (ელექტროფილი) და ქლორიდ-ანიონად
        (ნუკლეოფილი).
      </Text>
      <Text>
        რადიკალური პოლიმერიზაცია იწყება ნივთიერებებით , რომლებსაც უნარი გააჩნიათ
        რეაქციის პირობებში დაიშალოს რადიკალებად, მაგ, პეროქსიდებით ან სითბოს ან
        სინათლის მოქმედებით.განვიხილოთ რადიკალური პოლიმერიზაციის მექანიზმი. და
        ა.შ საწყის ეტაპზე რადიკალი უტევს ეთილენის მოლეკულას და იწვევს ორმაგი
        ბმის ჰომოლიტურ გახლეჩას, რის შემდეგაც ის უერთდება ნახშირბადის ატომს და
        წარმოქმნის ახალ რადიკალს. წარმოქმნილი ახალი რადიკალი მოქმედებს ახალ
        მოლეკულაზე და პროცესი მეორდება.{" "}
      </Text>

      <SubHeader id="alcadiens">ალკადიენები (დიენური ნახშირწყალბადები)</SubHeader>
      <Text>
        დიენური ნახშირწყალბადები ანუ ალკადიენები არის უჯერი ნახშირწყალბადების
        კლასი , რომელიც შეიცავს ორ ორმაგ ბმას.ჰომოლოგიური რიგის საერთო ფორმულაა
        CnH<sub>2</sub>
        <sub>n-2</sub>.
      </Text>
      <Text>
        ორმაგი ბმის ერთმანეთის მიმართ მდებარეობის მიხედვით არსებობს ნაერთთა სამი
        ტიპი:
      </Text>
      <List>
        <ListElement>
          ნახშირწყალბადები კუმულირებული ორმაგი ბმებით, ე. ი. ერთმანეთის გვერდით
          მდებარე მაგ: პროპადიენი ანუ ალენი CH<sub>2</sub>=C=CH<sub>2</sub>;
        </ListElement>
        <ListElement>
          ნახშირწყალბადები იზოლირებული ორმაგი ბმებით ე. ი. განცალკავებული ორი ან
          მეტი ერთმაგი ბმით, მაგ: პენტადიენი -1,4 CH<sub>2</sub>=CH-CH
          <sub>2</sub>-CH=CH<sub>2</sub>
        </ListElement>
        <ListElement>
          ნახშირწყალბადები შეუღლებული ორმაგი ბმით ,ე. ი.განცალკავებული ერთი
          ერთმაგი ბმით. მაგ:ბუტადიენ -1,3 ან დივინილი CH<sub>2</sub>=CH-CH=CH
          <sub>2</sub>, 2- მეთილბუტადიენ -1,3 ან იზოპრენი თავისი თვისებებით
          გამოირჩევიან ნახშირწყალბადები შეუღლებული ორმაგი ბმით.
        </ListElement>
      </List>

      <SubHeader id="alcohol">სპირტები</SubHeader>
      <Text>
        სპირტები ეწოდება ნაერთებს, რომლებიც შეიცავენ ერთ ან რამოდენიმე (–ОН)
        ჰიდროქსილის ჯგუფს. ჰიდროქსილის ჯგუფის რაოდენობის მიხედვით შეიძლება
        არსებობდეს ერთ-, ორ- და სამატომიანი სპირტი. იმის და მიხედვით,თუ რომელ
        ატომთან არის შეერთებული ჰიდროქსილის ჯგუფი, არსებობს პირველადი, მეორეული
        და მესამეული სპირტები:
      </Text>
      <Text>
        პირვლადი R-CH<sub>2</sub>- OH,
      </Text>
      <Text>მეორეული R-CH-R-OH</Text>
      <Text>მესამეული R'-R-C-R''-OH</Text>

      <SubHeader id="hydrocarbon">არომატული ნახშირწყალბადები </SubHeader>
      <Text>
        ტიპიური წარმომადგენელი არომატული ნახშირწყალბადებისა არის ბენზოლი,ის არის
        კარბოციკლური ნაერთი , რომლის მოლეკულასაც გააჩნია განსაკუთრებული
        ექვსწევრიანი აღნაგობა და უწოდებენ არომატულ ბირთვს
      </Text>
      <Text>
        1825 წელს ინგლისელმა მკვლევარმა მაიკლ ფარადეიმ მიიღო ნაერთი, რომელსაც
        ჰქონდა არომატული სუნი. მისი ფორმულა არის C<sub>6</sub>Н<sub>6</sub>. ამ
        ნაერთის სახელწოდებაა ბენზოლი და ის არის არომატული ნახშირწყალბადების
        უმარტივესი წარმომადგენელი. ბენზოლის გავრცელებული სტრუქტურული ფორმულა
        შემოთავაზებულ იქნა გერმანელი მეცნიერის კეკულეს მიერ 1865 წელს და
        წარმოადგენს ციკლს, რომელშიც ერთმაგი და ორმაგი ბმები მონაცვლეობით არიან
        განლაგებულნი.
      </Text>
      <Text>
        მიუხედავად ამისა ფიზიკური, ქიმიური და კვანტურ მექანიკური გამოკვლევებით
        დადგენილ იქნა,რომ ბენზოლში არ არსებობს ჩვეულებრივი ორმაგი და ერთმაგი
        ბმა, ყველა ეს ბმა თანასწორია , ექვივალენტურია და ასეთი ბმები
        დამახასიათებელია მხოლოდ ბენზოლის არომატული ბირთვისათვის.აღმოჩნდა, რომ
        ბენზოლში ბმების სიგრძე არის ერთნაირი და ტოლია 0,139 ნმ, ხოლო სავალენტო
        კუთხე 120. ყველა ნახშირბადის ატომი ბენზოლში არის sp2 - ტიპის
        ჰიბრიდიზაციაში.ეს მიუთითებს, რომ ნახშირბადის ატომში ერთი s- და ორი p
        ორბიტალი არის ჰიბრიდული. ხოლო ერთი p- ორბიტალი არაჰიბრიდული. ორი
        ჰიბრიდული ორბიტალი გადაიფარება მისი მსგავსი ორბიტალით , ხოლო ერთი კი-
        წყალბადის s-ორბიტალით. ასეთი გადაფარვის შედეგად მიიღება 12 p- ბმა ,
        რომლებიც ერთ სიბრტყეშია განლაგებული. მეოთხე არაჰიბრიდული p-ორბიტალი
        განლაგებულია პერპენდიკულარულ სიბრტყეში p-ბმის მდებარეობის მიმართ. ასეთი
        ტიპის ორბიტალების გადაფარვის შედეგად მიიღება , როგორც ეთილენის
        შემთხვევაში, p-ბმა. ბენზოლის შემთხვევაში გადაფარვა არ იზღუდება, რის
        შედეგადაც წარმოიშობა ერთიანი ელექტრონული ღრუბელი, რომელიც მოთავსებულია
        ექვსწევრიანი ციკლის შუაში
      </Text>
      <Text>
        თეორიული თვალთახედვით არომატული ეწოდება ციკლურ ნაერთს, რომელსაც გააჩნია
        ბრტყელი აღნაგობა და შეკრულ შეუღლებულ სისტემაში შეიცავს (4n+2) p-
        ელექტრონს, სადაც n –მთელი რიცხვია, არომატულობის ეს კრიტერიუმი ცნობილია
        ჰიუკელის წესის სახელით.ჰიუკელის მიხედვით n=1,p-ელექტრონების რიცხვი არის
        ექვსი. რასაც პასუხობს ბენზოლის აღნაგობა, რის გამოც ბენზოლის მოლეკულა
        ცნობილია არომატული სექსტეტის სახელწოდებით, არომატული ნახშირწყალბადების
        მაგალითია 10- და 14 p- ელექტრონის შემცველი მრავალატომიანი არომატული
        ნაერთები ნაფტალინი და ატრაცენი
      </Text>

      <SubHeader id="isomer">იზომერია</SubHeader>
      <Text>
        აღნაგობის თეორია უშვებს მხოლოდ ბენზოლის და მისი ერთი ჰომოლოგის ტოლუოლის
        არსებობას(C7H8). ხოლო შემდეგი ჰომოლოგები შეიძლება არსებობდნენ რამოდენიმე
        იზომერის სახით. იზომერები შეიძლება არსებობდეს რადიკალური, ჯაჭვის და
        ბენზოლის ბირთვთან მიერთების მიხედვით. ორი ჩამნაცვლებლის მდებარეობის
        მიხედვით მიღებულ იზომერიას აღნიშნავენ ორთო(1,2) მეტა(1,3) და პარა(1, 4)
        სახით
      </Text>

      <PhotoContainer>
        <PhotoWithCaption
          src={Image5}
          caption="ორთო-ქსილოლი (1,2-დიმეთილბენზოლი)"
          alt="ორთო-ქსილოლი (1,2-დიმეთილბენზოლი)"
        />
        <PhotoWithCaption
          src={Image6}
          caption="მეტა-ქსილოლი (1,3-დიმეთილბენზოლი)"
          alt="მეტა-ქსილოლი (1,3-დიმეთილბენზოლი)"
        />
        <PhotoWithCaption
          src={Image7}
          caption="პარა-ქსილოლი (1,4-დიმეთიბენზოლი)"
          alt="პარა-ქსილოლი (1,4-დიმეთიბენზოლი)"
        />
      </PhotoContainer>
      <Text>
        ბენზოლი და მისი უახლოესი ჰომოლოგები – უფერო სითხეებია სპეციფიური
        სუნით.არომატული ნაერთები წყალზე მსუბუქია და მასში არ იხსნებიან. მაგრამ
        ისინი ადვილად იხსნებიან ორგანულ გამხსნელებში-სპირტში. ეთერში, აცეტონში.{" "}
      </Text>
      <Text>
        {" "}
        ბენზოლის ბირთვს გააჩნია მაღალი სიმტკიცე. რითაც აიხსნება მისი მონაწილეობა
        ჩანაცვლების რეაქციებში.ალკანებისაგან განსხვავებით. რომლებიც აგრეთვე
        მონაწილეობენ ჩანაცვლების რეაქციებში, არენების ბირთვის წყალბადატომები
        უფრო მოძრავნი არიან, ამიტომ ჰალოგენირების , ნიტრირების , სულფირებისა და
        ა. შ., რეაქციები მიმდინარეობს უფრო რბილ პირობებში ვიდრე ალკანებში.
      </Text>
      <Text>
        ელექტროფილური ჩანაცვლება ბენზოლში მიუხედავად იმისა, რომ ბენზოლი
        შედგენილობით არის უჯერი . მისთვის არ არის დამახასიათებელი მიერთების
        რეაქციები.ბენზოლის ბირთვისათვის ტიპიური რეაქციაა წყალბადის ატომების
        ჩანაცვლება - უფრო ზუსტად ელექტროფილური ჩანაცვლება. განვიხილოთ ამ ტიპის
        რეაქციებიდან ყველაზე მახასიათებელი.
      </Text>

      <Quiz />
    </Container>
  );
}

export default Content;
