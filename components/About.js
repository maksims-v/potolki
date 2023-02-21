import React from 'react';
import { Typography, Box, List, ListItem, useMediaQuery } from '@mui/material';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import ImageLibrary from './ImageLibrary';

const whyArrRus = [
  'Монтажные работы в сжатые сроки. Установка потолка в течении 1-го дня.',
  'Нет необходимости в освобождении комнаты, нужен лишь доступ к рабочему пространству.',
  'Минимальное пространство между основным и натяжным потолком составляет лишь 2.5 см.',
  'В навесных потолках можно установить любой тип освещения, вентиляцию, крепление для гардин, датчики сигнализации...',
  'Натяжной потолок защитит не только от осыпающейся штукатурки, но и в случае протечки сверху убережет дорогой интерьер, приняв всю массу воды на себя (а это порядка 100 литров на квадратный метр).',
  'В натяжной потолок можно спрятать системы вентиляции, сигнализации и противопожарной безопасности. При необходимости, возможно применение дополнительных теплоизоляционных материалов.',
  'Натяжной потолок не требует дополнительного ухода и периодического ремонта, что позволит сэкономить силы и средства.',
  'На натяжных потолках не скапливается статическое электричество и не образуется конденсат, что очень важно для бассейнов и ванных комнат.',
  'Натяжной Потолок легко демонтируется, после повторного монтажа полотно принимает свой первоначальный вид, причем качественные характеристики не меняются.',
  'Идеально подходит для срубов и новостроек. Потому как при усадке дома потолок ни как пе пострадает.',
  'Выгодное отличие натяжных потолков от обычных способов отделки заключается в огромном выборе цветов и фактур материала.',
  'Полотно натяжного потолка настолько эластично, что может принимать абсолютно любую форму: арочную, угловую, многогранную, многоуровневую, футуристическую трехмерную поверхность и т.п.',
  'Помимо этого, сам натяжной потолок абсолютно экологический и пожаробезопасный, он не впитывает запахи и не пропускает звуки.',
  'Монтаж натяжного потолка на всех этапах исключает строительный мусор и грязь, какие-то дополнительные неудобства.',
  ' Натяжной потолок нуждается в самом простом уходе, через несколько лет, когда потолок перестанет сиять, как в первый день, его необходимо будет протереть сухой салфеткой.',
  'И еще, натяжные потолки служат долгое время. Только гарантийный срок составляет 10 лет, причем за это время полотно не изменит своего цвета, не выгорит, не утратит первоначальных технических характеристик.',
  'О прочности материала говорит тот факт, что полотно выдерживает удар пробки от бутылки шампанского.',
];

const whyArrLat = [
  'Instalācijas darbi īsā laikā. Griestu uzstādīšana 1 dienas laikā.',
  'Nav jāatbrīvo telpa, ir tikai piekļuve darba vietai.',
  'Minimālā atstarpe starp galvenajiem un stieptajiem griestiem ir tikai 2,5 cm.',
  'Piekaramajos griestos var uzstādīt jebkura veida apgaismojumu, ventilāciju, aizkarus, signalizācijas sensorus...',
  'Stieptie griesti pasargās ne tikai no drūpošā apmetuma, bet arī noplūdes gadījumā no augšas pasargās dārgu interjeru, uzņemot visu ūdens masu (un tas ir aptuveni 100 litri uz kvadrātmetru).',
  'Ventilācijas, signalizācijas un ugunsdrošības sistēmas var paslēpt stieptajos griestos. Ja nepieciešams, iespējams izmantot papildus siltumizolācijas materiālus.',
  'Stieptajiem griestiem nav nepieciešama papildu apkope un periodisks remonts, kas ietaupīs pūles un naudu.',
  'Stieptie griesti neuzkrāj statisko elektrību un neveidojas kondensāts, kas ir ļoti svarīgi peldbaseiniem un vannas istabām.',
  'Stieptie griesti ir viegli demontējami, pēc atkārtotas uzstādīšanas audekls atgriežas sākotnējā formā, un kvalitātes raksturlielumi nemainās.',
  'Ideāli piemērots guļbaļķu mājām un jaunām ēkām. Jo, kad māja sarūk, griesti nekādā veidā necietīs.',
  'Izdevīgā atšķirība starp stieptajiem griestiem un tradicionālajām apdares metodēm slēpjas milzīgajā materiālu krāsu un faktūru izvēlē.',
  'Stiepto griestu audums ir tik elastīgs, ka tam var būt pilnīgi jebkura forma: izliekta, stūraina, daudzšķautņaina, daudzlīmeņu, futūristiska trīsdimensiju virsma utt.',
  'Turklāt paši stieptie griesti ir absolūti ekoloģiski un ugunsdroši, tie neuzsūc smakas un nelaiž iekšā skaņas.',
  'Stiepto griestu uzstādīšana visos posmos novērš būvgružus un netīrumus, kā arī dažas papildu neērtības.',
  ' Stiepjamajiem griestiem nepieciešama visvienkāršākā kopšana, pēc dažiem gadiem, kad griesti pārstās spīdēt kā pirmajā dienā, tie būs jānoslauka ar sausu drānu.',
  'Un tomēr stieptie griesti kalpo ilgu laiku. Tikai garantijas laiks ir 10 gadi, un šajā laikā audekls nemainīs savu krāsu, neizdegs, nezaudēs sākotnējās tehniskās īpašības.',
  'Par materiāla izturību liecina fakts, ka audekls iztur korķa triecienu no šampanieša pudeles.',
];

const About = ({ language }) => {
  const isNonMediumScreens = useMediaQuery('(min-width: 900px)');

  return (
    <Box sx={{ margin: '0 auto' }}>
      <Typography
        variant="h3"
        sx={{ borderBottom: 2, borderColor: '#ffd166', mb: '10px', pb: '5px', fontWeight: 'bold' }}>
        {language ? 'Преимущества натяжных потолков:' : 'Stiepto griestu priekšrocības:'}
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        {(language ? whyArrRus : whyArrLat).map((item) => (
          <ListItem
            key={item}
            sx={{
              fontSize: isNonMediumScreens ? '16px' : '12px',
              p: '5px',
              position: 'relative',
              pl: '25px',
            }}>
            <CheckCircleOutlineTwoToneIcon
              sx={{ color: '#1976d2', position: 'absolute', top: '5px', left: '0px' }}
            />
            {item}
          </ListItem>
        ))}
      </List>
      <ImageLibrary language={language} />
      <Typography
        variant="h3"
        sx={{
          borderBottom: 2,
          borderColor: '#ffd166',
          mb: '25px',
          pb: '5px',
          pt: 5,
          fontWeight: 'bold',
        }}>
        {language
          ? 'Общая информация о натяжных потолках'
          : 'Vispārīga informācija par stieptajiem griestiem'}
      </Typography>
      {language ? (
        <Typography variant="h4" sx={{ fontSize: '16px', pb: 5 }}>
          Натяжной потолок представляет собой полотнище, которое натягивается на специально
          сконструированный профиль – багет под основным потолком. Использование качественного
          натяжного полотна позволяет скрыть любые дефекты и сформировать идеально ровную потолочную
          поверхность, что необходимо для создания максимального уюта в любом помещении. <br />{' '}
          <br /> В соответствии с технологией монтажа и вида натяжного потолка уменьшение уровня
          потолка составит 3-5 см, а если использовать глянцевые полотна, то визуально Ваш потолок
          станет еще выше. Стоит заметить, что время установки одного потолка средней сложности
          составляет всего несколько часов, при этом процесс монтажа не оставляет грязи и
          строительного мусора. <br /> Для монтажа натяжных потолков не имеет существенного значения
          ни планировка, ни площадь обустраиваемого помещения. Натяжные потолки, изготовленные на
          заказ, вписываются в совершенно любое пространство, позволяя воплотить в жизнь самые
          смелые дизайнерские идеи. Кроме того, не требуется соблюдение каких-либо особых условий
          для эксплуатации натяжного потолка. Для натяжного полотна оптимальная температура воздуха
          составляет от +0ºС до +60ºС, а этого диапазона достаточно даже для самых экстремальных
          ситуаций с погодой и отоплением жилых помещений. Нет ограничений для натяжного потолка и
          по уровню влажности в помещении, так как материал, из которого состоит полотно, совершенно
          не впитывает влагу и не конденсирует испарения. <br />
          <br /> Натяжной потолок практически не требует ухода. Если вдруг появились загрязнения, то
          их можно смыть мягкой тканью, смоченной в теплом мыльном растворе. В свою очередь, для
          восстановления блеска глянцевого натяжного покрытия чаще всего достаточно просто протереть
          его сухой салфеткой.{' '}
        </Typography>
      ) : (
        <Typography variant="h4" sx={{ fontSize: '16px', pb: 5 }}>
          Stiepti griesti ir panelis, kas tiek izstiepts uz speciāli izstrādāts profils - bagete zem
          galvenajiem griestiem. Kvalitātes izmantošana elastīgs audums ļauj noslēpt visus defektus
          un izveidot perfekti plakanus griestus virsma, kas nepieciešama, lai radītu maksimālu
          komfortu jebkurā telpā. <br /> <br /> Atbilstoši uzstādīšanas tehnoloģijai un stiepto
          griestu tipam, samazinot griestu līmeni būs 3-5 cm, un, ja izmantojat spīdīgus audeklus,
          tad vizuāli jūsu griesti kļūs vienmērīgi augstāks. Ir vērts atzīmēt, ka vienas vidējas
          sarežģītības griestu uzstādīšanas laiks ir tikai vairākas stundas, kamēr uzstādīšanas
          process neatstāj netīrumus un gružus. <br /> Stiepto griestu uzstādīšanai ne izkārtojums,
          ne platība nav būtiska aprīkotas telpas. Stiepjamie griesti, izgatavoti pēc pasūtījuma,
          iederas absolūti jebkura telpa, kas ļauj realizēt visdrosmīgākās dizaina idejas. Turklāt
          spriegotāja darbībai nav nepieciešami īpaši nosacījumi. griesti. Elastīgam audumam
          optimālā gaisa temperatūra ir no + 0ºС līdz + 60ºС, un šis diapazons ir pietiekams pat
          ekstrēmākajās situācijās ar laikapstākļiem un apkuri dzīvojamās telpas. Nav ierobežojumu
          stieptajiem griestiem un mitruma līmenim telpā, jo materiāls, no kura sastāv audekls,
          vispār neuzsūc mitrumu un neuzsūc kondensē tvaikus. <br />
          <br /> Stiepjamie griesti praktiski neprasa apkopi. Ja pēkšņi parādās piesārņojums, tad
          tos var nomazgāt ar mīkstu drāniņu, kas samitrināta siltā ziepjūdenī. Savukārt par
          glancēta elastīga pārklājuma spīduma atjaunošana bieži vien pietiek tikai ar noslaucīšanu
          ar savu sauso drānu.
        </Typography>
      )}
    </Box>
  );
};

export default About;
