export const categories = [
  {
    slug: "omurga",
    labelTr: "Omurga & Boyun",
    labelEn: "Spine & Neck",
    icon: "Zap",
  },
  {
    slug: "eklem",
    labelTr: "Eklem & Ortopedi",
    labelEn: "Joint & Orthopaedics",
    icon: "Bone",
  },
  {
    slug: "spor",
    labelTr: "Spor Yaralanmaları",
    labelEn: "Sports Injuries",
    icon: "Activity",
  },
  {
    slug: "noroloji",
    labelTr: "Nörolojik",
    labelEn: "Neurological",
    icon: "Brain",
  },
  {
    slug: "kadin",
    labelTr: "Kadın Sağlığı",
    labelEn: "Women's Health",
    icon: "Heart",
  },
  {
    slug: "pediatri",
    labelTr: "Pediatrik",
    labelEn: "Paediatric",
    icon: "Baby",
  },
];

export const diseases = [
  // ── OMURGA & BOYUN ──────────────────────────────────────────
  {
    slug: "bel-fitigi",
    category: "omurga",
    titleTr: "Bel Fıtığı",
    titleEn: "Lumbar Disc Herniation",
    summaryTr: "Bel omurları arasındaki diskin sinir köklerine baskı yapması sonucu oluşan, bacaklara yayılan ağrı ile karakterize rahatsızlık.",
    summaryEn: "A condition characterised by pain radiating to the legs, caused by the disc between lumbar vertebrae pressing on nerve roots.",
    descTr: `Bel fıtığı, omurlar arasındaki disk adı verilen kıkırdak yapının dışa doğru taşması veya yırtılması sonucunda sinir köklerine baskı yapmasıyla ortaya çıkar. En sık L4-L5 ve L5-S1 seviyelerinde görülür.

Uzun süreli oturma, ağır kaldırma, yanlış duruş ve ani hareketler bel fıtığı riskini artıran başlıca faktörlerdir. Disk dejenerasyonu ile birlikte yaşlanma da fıtık oluşumuna zemin hazırlar.

Fizyoterapi, bel fıtığının konservatif tedavisinde birinci basamak yaklaşım olarak kabul edilmektedir. Ağrı yönetimi, postür eğitimi, çekirdek kas güçlendirme ve manuel terapi kombinasyonu ile hastaların büyük çoğunluğu ameliyatsız iyileşir.`,
    descEn: `Lumbar disc herniation occurs when the cartilage structure called a disc between vertebrae bulges outward or ruptures, pressing on nerve roots. It most commonly occurs at the L4-L5 and L5-S1 levels.

Prolonged sitting, heavy lifting, poor posture and sudden movements are the main factors that increase the risk of disc herniation. Disc degeneration combined with ageing also predisposes to herniation formation.

Physiotherapy is recognised as the first-line approach in the conservative treatment of lumbar disc herniation. The vast majority of patients recover without surgery through a combination of pain management, posture training, core muscle strengthening and manual therapy.`,
    symptomsTr: ["Bel ağrısı", "Bacaklara yayılan ağrı (siyatik)", "Bacaklarda uyuşma ve karıncalanma", "Kas güçsüzlüğü", "Ayak düşmesi (ileri vakalarda)"],
    symptomsEn: ["Lower back pain", "Pain radiating to legs (sciatica)", "Numbness and tingling in legs", "Muscle weakness", "Foot drop (advanced cases)"],
    treatmentsTr: ["Manuel Terapi", "Traksiyon", "Çekirdek Stabilizasyon Egzersizleri", "McKenzie Metodu", "TENS", "Ultrason Terapisi", "Postür Eğitimi"],
    treatmentsEn: ["Manual Therapy", "Traction", "Core Stabilisation Exercises", "McKenzie Method", "TENS", "Ultrasound Therapy", "Posture Training"],
  },
  {
    slug: "boyun-fitigi",
    category: "omurga",
    titleTr: "Boyun Fıtığı",
    titleEn: "Cervical Disc Herniation",
    summaryTr: "Boyun omurları arasındaki diskin sinir köklerine veya omuriliğe baskı yapmasıyla oluşan, kollara yayılan ağrı ve uyuşma ile seyreden durum.",
    summaryEn: "A condition caused by the disc between cervical vertebrae pressing on nerve roots or the spinal cord, presenting with pain and numbness radiating to the arms.",
    descTr: `Boyun fıtığı, servikal omurlar arasındaki diskin yerinden kayması veya yırtılmasıyla sinir yapılarına baskı yapmasıyla meydana gelir. Uzun süre bilgisayar başında çalışma, yanlış uyku pozisyonu ve boyun travmaları temel risk faktörleridir.

Hastalık; boyun ağrısı, omuzlara ve kollara yayılan ağrı, ellerde uyuşma ve güçsüzlük ile kendini gösterir. İleri vakalarda denge sorunları da ortaya çıkabilir.

Fizyoterapi ile boyun kasları güçlendirilir, eklem hareketliliği artırılır ve sinir üzerindeki baskı azaltılır. Servikal traksiyon, manuel terapi ve stabilizasyon egzersizleri tedavinin temelini oluşturur.`,
    descEn: `Cervical disc herniation occurs when the disc between cervical vertebrae slips or ruptures, pressing on nerve structures. Working at a computer for long periods, incorrect sleeping positions and neck traumas are the main risk factors.

The condition presents with neck pain, pain radiating to the shoulders and arms, numbness and weakness in the hands. Balance problems may also occur in advanced cases.

With physiotherapy, neck muscles are strengthened, joint mobility is increased and pressure on the nerve is reduced. Cervical traction, manual therapy and stabilisation exercises form the basis of treatment.`,
    symptomsTr: ["Boyun ağrısı", "Kollara yayılan ağrı", "Ellerde uyuşma ve karıncalanma", "El güçsüzlüğü", "Baş dönmesi", "Denge sorunları"],
    symptomsEn: ["Neck pain", "Pain radiating to arms", "Numbness and tingling in hands", "Hand weakness", "Dizziness", "Balance problems"],
    treatmentsTr: ["Servikal Traksiyon", "Manuel Terapi", "Boyun Stabilizasyon Egzersizleri", "Derin Boyun Fleksör Güçlendirme", "TENS", "Isı Terapisi"],
    treatmentsEn: ["Cervical Traction", "Manual Therapy", "Neck Stabilisation Exercises", "Deep Neck Flexor Strengthening", "TENS", "Heat Therapy"],
  },
  {
    slug: "skolyoz",
    category: "omurga",
    titleTr: "Skolyoz",
    titleEn: "Scoliosis",
    summaryTr: "Omurganın yana doğru anormal eğriliği ile karakterize, genellikle ergenlik döneminde başlayan omurga deformitesi.",
    summaryEn: "A spinal deformity characterised by abnormal lateral curvature of the spine, typically beginning during adolescence.",
    descTr: `Skolyoz, omurganın yana doğru 10 derecenin üzerinde eğriliği olarak tanımlanır. Çoğunlukla nedeni bilinmemekle birlikte (idiyopatik skolyoz), nöromüsküler hastalıklar veya doğumsal anomaliler de skolyoza yol açabilir.

Ergenlik döneminde büyüme hızının arttığı dönemlerde eğriliğin ilerleme riski yüksektir. Erken tanı ve uygun tedavi bu ilerlemeyi önemli ölçüde yavaşlatabilir.

Fizyoterapi; Schroth metodu, Pilates bazlı egzersizler ve solunum teknikleriyle omurga eğriliğini azaltmayı, ağrıyı gidermeyi ve solunum kapasitesini artırmayı hedefler.`,
    descEn: `Scoliosis is defined as a lateral curvature of the spine greater than 10 degrees. Although the cause is often unknown (idiopathic scoliosis), neuromuscular diseases or congenital anomalies can also lead to scoliosis.

The risk of curvature progression is high during periods of rapid growth in adolescence. Early diagnosis and appropriate treatment can significantly slow this progression.

Physiotherapy aims to reduce spinal curvature, relieve pain and increase respiratory capacity through the Schroth method, Pilates-based exercises and breathing techniques.`,
    symptomsTr: ["Omuz yükseklik farkı", "Bel çizgisinde asimetri", "Bir kalçanın daha yüksek görünmesi", "Sırt ağrısı", "Nefes darlığı (ileri vakalarda)"],
    symptomsEn: ["Uneven shoulder height", "Asymmetry in waist line", "One hip appearing higher", "Back pain", "Shortness of breath (advanced cases)"],
    treatmentsTr: ["Schroth Metodu", "Pilates Bazlı Egzersizler", "Solunum Teknikleri", "Postür Eğitimi", "Manuel Terapi", "Korse Tedavisi Desteği"],
    treatmentsEn: ["Schroth Method", "Pilates-Based Exercises", "Breathing Techniques", "Postural Training", "Manual Therapy", "Brace Treatment Support"],
  },
  {
    slug: "siyatik",
    category: "omurga",
    titleTr: "Siyatik Sinir Ağrısı",
    titleEn: "Sciatica",
    summaryTr: "Siyatik sinirin baskı altında kalması sonucu kalçadan bacağa yayılan şiddetli ağrı ile karakterize durum.",
    summaryEn: "A condition characterised by severe pain radiating from the hip to the leg as a result of compression of the sciatic nerve.",
    descTr: `Siyatik sinir, vücudun en uzun siniridir ve bel omurlarından çıkarak kalça, uyluk, diz ve ayağa kadar uzanır. Bu sinire herhangi bir noktada baskı yapılması siyatik ağrısına neden olur.

En sık bel fıtığı, kas spazmı veya piriformis sendromu nedeniyle gelişen siyatik; oturma, öne eğilme ve uzun süreli ayakta durma ile artan, yatmakla hafifleyen ağrı ile kendini gösterir.

Fizyoterapi ile sinir üzerindeki baskı azaltılır, çevre kaslar güçlendirilir ve sinir mobilizasyon teknikleriyle iyileşme hızlandırılır.`,
    descEn: `The sciatic nerve is the longest nerve in the body, extending from the lumbar vertebrae through the hip, thigh, knee and down to the foot. Pressure on this nerve at any point causes sciatic pain.

Sciatica, most commonly developing due to lumbar disc herniation, muscle spasm or piriformis syndrome, presents with pain that worsens with sitting, bending forward and prolonged standing, and eases with lying down.

With physiotherapy, pressure on the nerve is reduced, surrounding muscles are strengthened, and recovery is accelerated with nerve mobilisation techniques.`,
    symptomsTr: ["Kalçadan bacağa yayılan ağrı", "Bacakta uyuşma", "Karıncalanma hissi", "Kas güçsüzlüğü", "Oturmakla artan ağrı"],
    symptomsEn: ["Pain radiating from hip to leg", "Leg numbness", "Tingling sensation", "Muscle weakness", "Pain worsening with sitting"],
    treatmentsTr: ["Sinir Mobilizasyonu", "Piriformis Germe Egzersizleri", "Manuel Terapi", "TENS", "McKenzie Egzersizleri", "Postür Eğitimi"],
    treatmentsEn: ["Nerve Mobilisation", "Piriformis Stretching Exercises", "Manual Therapy", "TENS", "McKenzie Exercises", "Postural Training"],
  },
  {
    slug: "bel-kaymasi",
    category: "omurga",
    titleTr: "Bel Kayması (Spondilolistezis)",
    titleEn: "Spondylolisthesis",
    summaryTr: "Bir omur gövdesinin alttaki omura göre öne kayması ile oluşan, bel ağrısı ve bacak semptomlarına neden olan durum.",
    summaryEn: "A condition caused by one vertebral body slipping forward relative to the one below, causing lower back pain and leg symptoms.",
    descTr: `Spondilolistezis, omurganın stabilitesinin bozulması sonucu bir omur gövdesinin öne kaymasıyla oluşur. Doğumsal, dejeneratif veya travmatik nedenlerle gelişebilir. L4-L5 ve L5-S1 seviyeleri en sık etkilenen bölgelerdir.

Hafif vakalarda ağrı ve hareket kısıtlılığı egzersiz ve fizyoterapiyle kontrol altına alınabilir. İleri vakalarda sinir baskısı belirtileri ortaya çıkabilir.

Tedavide çekirdek stabilizasyon egzersizleri, omurga çevre kaslarını güçlendirme ve postür eğitimi ile omurganın stabilitesi yeniden sağlanır.`,
    descEn: `Spondylolisthesis occurs when the stability of the spine is disrupted and one vertebral body slips forward. It can develop from congenital, degenerative or traumatic causes. The L4-L5 and L5-S1 levels are the most commonly affected areas.

In mild cases, pain and restricted movement can be controlled with exercise and physiotherapy. In advanced cases, symptoms of nerve compression may appear.

In treatment, spinal stability is restored through core stabilisation exercises, strengthening of muscles surrounding the spine and postural training.`,
    symptomsTr: ["Bel ağrısı", "Bacaklara yayılan ağrı", "Yürüyüşte bozulma", "Bacaklarda güçsüzlük", "Uzun süre ayakta duramama"],
    symptomsEn: ["Lower back pain", "Pain radiating to legs", "Altered gait", "Leg weakness", "Inability to stand for long periods"],
    treatmentsTr: ["Çekirdek Stabilizasyon", "Lomber Stabilizasyon Egzersizleri", "Manuel Terapi", "Postür Eğitimi", "Hidroterapi"],
    treatmentsEn: ["Core Stabilisation", "Lumbar Stabilisation Exercises", "Manual Therapy", "Postural Training", "Hydrotherapy"],
  },
  {
    slug: "omurga-kanali-darligı",
    category: "omurga",
    titleTr: "Omurga Kanalı Darlığı (Spinal Stenoz)",
    titleEn: "Spinal Stenosis",
    summaryTr: "Omurga kanalının daralması sonucu sinir yapılarına baskı oluşması ve yürüyüşle artan bacak ağrısı ile seyreden durum.",
    summaryEn: "A condition resulting from narrowing of the spinal canal causing compression of nerve structures, presenting with leg pain that worsens with walking.",
    descTr: `Spinal stenoz, omurga kanalının daralarak içinden geçen sinir yapılarına baskı yapmasıyla oluşur. Genellikle yaşlanmayla birlikte gelişen dejeneratif değişiklikler sonucunda ortaya çıkar.

En belirgin özelliği nörojenik klodikasyon adı verilen yürüyüşle artan, oturmakla geçen bacak ağrısıdır. Hastalar genellikle alışveriş arabasına yaslanarak yürüyebildiklerini ifade eder.

Fizyoterapi ile fleksiyon bazlı egzersizler, bisiklet egzersizleri ve omurga mobilizasyonu ile semptomlar önemli ölçüde azaltılabilir.`,
    descEn: `Spinal stenosis occurs when the spinal canal narrows and compresses the nerve structures passing through it. It usually develops as a result of degenerative changes that occur with ageing.

Its most distinctive feature is neurogenic claudication — leg pain that worsens with walking and eases with sitting. Patients often report being able to walk by leaning on a shopping trolley.

With physiotherapy, symptoms can be significantly reduced through flexion-based exercises, cycling exercises and spinal mobilisation.`,
    symptomsTr: ["Yürüyüşle artan bacak ağrısı", "Oturmakla geçen ağrı", "Bacaklarda uyuşma", "Denge sorunları", "Mesane kontrolünde sorun (ileri vaka)"],
    symptomsEn: ["Leg pain worsening with walking", "Pain easing with sitting", "Leg numbness", "Balance problems", "Bladder control problems (advanced)"],
    treatmentsTr: ["Fleksiyon Bazlı Egzersizler", "Bisiklet Egzersizleri", "Aquaterapisi", "Manuel Terapi", "Çekirdek Güçlendirme"],
    treatmentsEn: ["Flexion-Based Exercises", "Cycling Exercises", "Aquatic Therapy", "Manual Therapy", "Core Strengthening"],
  },

  // ── EKLEM & ORTOPEDİ ──────────────────────────────────────────
  {
    slug: "diz-kirectenmesi",
    category: "eklem",
    titleTr: "Diz Kireçlenmesi (Gonartrit)",
    titleEn: "Knee Osteoarthritis",
    summaryTr: "Diz eklemindeki kıkırdak dokunun aşınması sonucu oluşan, ağrı, şişlik ve hareket kısıtlılığıyla seyreden dejeneratif eklem hastalığı.",
    summaryEn: "A degenerative joint disease resulting from wear of cartilage tissue in the knee joint, presenting with pain, swelling and restricted movement.",
    descTr: `Diz kireçlenmesi, eklem kıkırdağının zamanla aşınmasıyla meydana gelir. Obezite, eski yaralanmalar, yoğun fiziksel aktivite ve genetik yatkınlık risk faktörleri arasında yer alır.

Ağrı özellikle merdiven inip çıkarken, uzun süre yürüdükten sonra ve sabah kalkarken hissedilir. İlerlemiş vakalarda istirahat ağrısı da ortaya çıkabilir.

Fizyoterapi, diz kireçlenmesinde ağrıyı azaltmak, kas gücünü artırmak ve eklem yükünü dengelemek açısından kritik rol oynar. Kuadriseps güçlendirme egzersizleri ve denge eğitimi tedavinin temelini oluşturur.`,
    descEn: `Knee osteoarthritis occurs with progressive wear of articular cartilage over time. Obesity, previous injuries, intensive physical activity and genetic predisposition are among the risk factors.

Pain is especially felt when climbing and descending stairs, after prolonged walking and upon waking in the morning. In advanced cases, rest pain may also occur.

Physiotherapy plays a critical role in reducing pain, increasing muscle strength and balancing joint load in knee osteoarthritis. Quadriceps strengthening exercises and balance training form the basis of treatment.`,
    symptomsTr: ["Diz ağrısı", "Sabah tutukluğu", "Şişlik", "Hareket kısıtlılığı", "Merdivende güçlük", "Eklem sesi (krepitasyon)"],
    symptomsEn: ["Knee pain", "Morning stiffness", "Swelling", "Restricted movement", "Difficulty with stairs", "Joint sounds (crepitation)"],
    treatmentsTr: ["Kuadriseps Güçlendirme", "Denge ve Propriyosepsiyon Eğitimi", "Manuel Terapi", "Ultrason Terapisi", "Kinesio Bantlama", "Hidroterapi"],
    treatmentsEn: ["Quadriceps Strengthening", "Balance and Proprioception Training", "Manual Therapy", "Ultrasound Therapy", "Kinesio Taping", "Hydrotherapy"],
  },
  {
    slug: "frozen-shoulder",
    category: "eklem",
    titleTr: "Donuk Omuz (Frozen Shoulder)",
    titleEn: "Frozen Shoulder (Adhesive Capsulitis)",
    summaryTr: "Omuz eklemini saran kapsülün iltihaplanması ve kalınlaşması sonucu oluşan, şiddetli ağrı ve hareket kaybıyla seyreden durum.",
    summaryEn: "A condition caused by inflammation and thickening of the capsule surrounding the shoulder joint, presenting with severe pain and loss of movement.",
    descTr: `Donuk omuz (adeziv kapsülit), omuz eklemini çevreleyen kapsülün iltihaplanması ve fibrozisi sonucu gelişir. Genellikle 40-60 yaş arasında, diyabetiklerde ve uzun süre hareketsiz kalan omuzlarda görülür.

Hastalık üç aşamada ilerler: ağrı aşaması, donma aşaması ve çözülme aşaması. Toplam süre 1-3 yıl arasında değişebilir.

Erken dönemde başlanan fizyoterapi bu süreci önemli ölçüde kısaltır. Eklem mobilizasyonu, kapsüler germe egzersizleri ve manuel terapi ile omuz hareketliliği yeniden kazandırılır.`,
    descEn: `Frozen shoulder (adhesive capsulitis) develops as a result of inflammation and fibrosis of the capsule surrounding the shoulder joint. It generally occurs in people aged 40-60, in diabetics and in shoulders that have been immobile for a long time.

The condition progresses in three stages: the freezing stage, the frozen stage and the thawing stage. The total duration can range from 1-3 years.

Physiotherapy started early significantly shortens this process. Shoulder mobility is restored through joint mobilisation, capsular stretching exercises and manual therapy.`,
    symptomsTr: ["Omuz ağrısı", "Hareket açıklığında ciddi azalma", "Geceleri artan ağrı", "Kol kaldırmada güçlük", "Elbise giymede zorluk"],
    symptomsEn: ["Shoulder pain", "Significant reduction in range of motion", "Pain worsening at night", "Difficulty raising arm", "Difficulty dressing"],
    treatmentsTr: ["Eklem Mobilizasyonu", "Kapsüler Germe", "Pendulum Egzersizleri", "Manuel Terapi", "Ultrason", "Ev Egzersiz Programı"],
    treatmentsEn: ["Joint Mobilisation", "Capsular Stretching", "Pendulum Exercises", "Manual Therapy", "Ultrasound", "Home Exercise Programme"],
  },
  {
    slug: "karpal-tunel",
    category: "eklem",
    titleTr: "Karpal Tünel Sendromu",
    titleEn: "Carpal Tunnel Syndrome",
    summaryTr: "Bileğin karpal tünelinden geçen median sinirin sıkışması sonucu elde uyuşma, karıncalanma ve güçsüzlüğe neden olan durum.",
    summaryEn: "A condition causing numbness, tingling and weakness in the hand due to compression of the median nerve passing through the carpal tunnel of the wrist.",
    descTr: `Karpal tünel sendromu, bilek kanalından geçen median sinirin baskı altında kalmasıyla oluşur. Tekrarlayan el hareketleri, gebelik, diyabet ve tiroid hastalıkları risk faktörü oluşturur.

Başparmak, işaret parmağı, orta parmak ve yüzük parmağının yarısında uyuşma ve karıncalanma temel belirtilerdir. Geceleri uyku uyumayı engelleyen ağrı sık görülen şikayetler arasındadır.

Fizyoterapi ile sinir mobilizasyonu, bilek egzersizleri ve ergonomik düzenlemeler semptomları önemli ölçüde hafifletir.`,
    descEn: `Carpal tunnel syndrome occurs when the median nerve passing through the wrist canal is compressed. Repetitive hand movements, pregnancy, diabetes and thyroid diseases are risk factors.

Numbness and tingling in the thumb, index finger, middle finger and half of the ring finger are the main symptoms. Pain that prevents sleep at night is among the common complaints.

With physiotherapy, nerve mobilisation, wrist exercises and ergonomic adjustments significantly relieve symptoms.`,
    symptomsTr: ["Parmak uçlarında uyuşma", "Karıncalanma", "Geceleri uyandıran ağrı", "El güçsüzlüğü", "Kavrama gücünde azalma"],
    symptomsEn: ["Numbness in fingertips", "Tingling", "Pain waking at night", "Hand weakness", "Reduced grip strength"],
    treatmentsTr: ["Sinir Mobilizasyonu", "Bilek Germe Egzersizleri", "Atel Uygulaması", "Ultrason Terapisi", "Ergonomi Eğitimi"],
    treatmentsEn: ["Nerve Mobilisation", "Wrist Stretching Exercises", "Splint Application", "Ultrasound Therapy", "Ergonomics Training"],
  },
  {
    slug: "omuz-sikismasi",
    category: "eklem",
    titleTr: "Omuz Sıkışma Sendromu",
    titleEn: "Shoulder Impingement Syndrome",
    summaryTr: "Kol kaldırma sırasında rotator manşet kaslarının akromion altında sıkışmasıyla oluşan ağrı sendromu.",
    summaryEn: "A pain syndrome caused by the rotator cuff muscles being pinched under the acromion when raising the arm.",
    descTr: `Omuz sıkışma sendromu, kol kaldırılırken rotator manşet tendonlarının akromion kemiği ile humerus başı arasında sıkışmasıyla oluşur. Tekrarlayan üst extremite aktiviteleri, yüzücüler ve elde iş yapanlar risk altındadır.

Kol belirli bir açıya geldiğinde hissedilen ve kolun üste gitmesiyle artan ağrı, özellikle geceleri uyku pozisyonunu bozacak kadar şiddetlenebildiği görülür.

Fizyoterapi ile skapular stabilizasyon, rotator manşet güçlendirme ve omuz postürünün düzeltilmesi ile semptomlarda belirgin iyileşme sağlanır.`,
    descEn: `Shoulder impingement syndrome occurs when rotator cuff tendons are pinched between the acromion bone and the head of the humerus when raising the arm. People engaged in repetitive upper extremity activities, swimmers and manual workers are at risk.

Pain felt when the arm reaches a certain angle and worsening as the arm goes higher can sometimes become severe enough to disturb sleep position at night.

With physiotherapy, significant improvement in symptoms is achieved through scapular stabilisation, rotator cuff strengthening and correction of shoulder posture.`,
    symptomsTr: ["Kol kaldırmada ağrı", "Geceleri artan omuz ağrısı", "Arka cebe uzanmada güçlük", "Omuzda güçsüzlük"],
    symptomsEn: ["Pain when raising arm", "Shoulder pain worsening at night", "Difficulty reaching back pocket", "Shoulder weakness"],
    treatmentsTr: ["Rotator Manşet Güçlendirme", "Skapular Stabilizasyon", "Manuel Terapi", "Kinesio Bantlama", "Postür Eğitimi"],
    treatmentsEn: ["Rotator Cuff Strengthening", "Scapular Stabilisation", "Manual Therapy", "Kinesio Taping", "Postural Training"],
  },

  // ── SPOR YARALANMALARI ──────────────────────────────────────────
  {
    slug: "acl-yirtigi",
    category: "spor",
    titleTr: "Ön Çapraz Bağ (ACL) Yırtığı",
    titleEn: "Anterior Cruciate Ligament (ACL) Tear",
    summaryTr: "Diz ekleminin stabilitesini sağlayan ön çapraz bağın kısmen veya tamamen yırtılmasıyla oluşan spor yaralanması.",
    summaryEn: "A sports injury caused by partial or complete tearing of the anterior cruciate ligament, which provides stability to the knee joint.",
    descTr: `ACL yırtığı, özellikle futbol, basketbol ve kayak gibi ani yön değiştirme gerektiren sporlarda sıkça görülür. Yırtılma anında 'çat' sesi duyulması ve anında oluşan şişlik karakteristiktir.

Tedavi; yaşa, aktivite düzeyine ve yırtığın derecesine göre cerrahi veya konservatif olarak planlanır. Her iki yaklaşımda da fizyoterapi rehabilitasyonun merkezindedir.

Rehabilitasyon süreci ödem kontrolü, hareket açıklığının yeniden kazanılması, kas güçlendirme ve spor performansına dönüş aşamalarından oluşur. Tahmini süre 6-9 aydır.`,
    descEn: `ACL tears are frequently seen in sports requiring sudden changes of direction, particularly football, basketball and skiing. A 'pop' sound at the moment of rupture and immediate swelling are characteristic.

Treatment is planned as surgical or conservative based on age, activity level and degree of the tear. Physiotherapy is central to rehabilitation in both approaches.

The rehabilitation process consists of stages: oedema control, regaining range of motion, muscle strengthening and return to sporting performance. The estimated duration is 6-9 months.`,
    symptomsTr: ["Yırtılma anında 'çat' sesi", "Ani şişlik", "Diz instabilitesi", "Ağrı", "Diz üzerinde yük verememe"],
    symptomsEn: ["'Pop' sound at moment of injury", "Immediate swelling", "Knee instability", "Pain", "Inability to bear weight on knee"],
    treatmentsTr: ["Ödem Kontrolü", "Kuadriseps Aktivasyonu", "Propriyosepsiyon Eğitimi", "Fonksiyonel Antrenman", "Spora Dönüş Protokolü"],
    treatmentsEn: ["Oedema Control", "Quadriceps Activation", "Proprioception Training", "Functional Training", "Return to Sport Protocol"],
  },
  {
    slug: "tenisci-dirseği",
    category: "spor",
    titleTr: "Tenisçi Dirseği (Lateral Epikondilit)",
    titleEn: "Tennis Elbow (Lateral Epicondylitis)",
    summaryTr: "Dirsek dış tarafındaki tendonların aşırı kullanıma bağlı iltihaplanması sonucu oluşan ağrı sendromu.",
    summaryEn: "A pain syndrome caused by overuse inflammation of the tendons on the outer side of the elbow.",
    descTr: `Tenisçi dirseği, dirsek dışındaki kemik çıkıntıya (lateral epikondil) tutunan kasların aşırı ve tekrarlayan kullanımı sonucu oluşan tendinopatidir. Adına rağmen tenisçilerden çok masa başı çalışanlar ve el işi yapanlarda görülür.

Dirsek dış tarafında başlayıp önkola yayılan ağrı, bilekten nesne kaldırma ve sıkma hareketlerinde şiddetlenir. Tenis raketi veya tornavida kullanmak semptomları artırır.

Fizyoterapi ile eksantrik egzersizler, manuel terapi ve kinesio bantlama ile tendon iyileşmesi desteklenir ve yük toleransı artırılır.`,
    descEn: `Tennis elbow is a tendinopathy resulting from excessive and repetitive use of the muscles attaching to the bony prominence on the outside of the elbow (lateral epicondyle). Despite its name, it is more commonly seen in desk workers and manual workers than in tennis players.

Pain starting on the outer side of the elbow and spreading to the forearm is intensified by lifting objects from the wrist and gripping movements. Using a tennis racket or screwdriver worsens symptoms.

With physiotherapy, tendon healing is supported and load tolerance is increased through eccentric exercises, manual therapy and kinesio taping.`,
    symptomsTr: ["Dirsek dışında ağrı", "Önkola yayılan ağrı", "El sıkmada güçsüzlük", "Nesne kaldırmada ağrı", "Sabah tutukluğu"],
    symptomsEn: ["Pain on outer elbow", "Pain spreading to forearm", "Weakness when gripping", "Pain when lifting objects", "Morning stiffness"],
    treatmentsTr: ["Eksantrik Egzersizler", "Manuel Terapi", "Kinesio Bantlama", "Ultrason Terapisi", "Ergonomi Düzenlemesi", "Bant / Destek"],
    treatmentsEn: ["Eccentric Exercises", "Manual Therapy", "Kinesio Taping", "Ultrasound Therapy", "Ergonomic Adjustment", "Bracing / Support"],
  },
  {
    slug: "asil-tendonu",
    category: "spor",
    titleTr: "Aşil Tendonu Yaralanmaları",
    titleEn: "Achilles Tendon Injuries",
    summaryTr: "Baldır kasını topuk kemiğine bağlayan aşil tendonunun iltihaplanması veya yırtılmasıyla oluşan yaralanmalar.",
    summaryEn: "Injuries caused by inflammation or rupture of the Achilles tendon, which connects the calf muscle to the heel bone.",
    descTr: `Aşil tendonu, vücudun en kalın ve güçlü tendonu olmasına karşın aşırı kullanım ve ani yüklenmelere karşı hassastır. Koşucular, atlamacılar ve orta yaş aktif bireyler risk grubundadır.

Aşil tendinopatisi, tendonun kronik dejenerasyonuyla ortaya çıkarken; akut yırtık çoğunlukla ani bir patlama sesi ve topuk üzerinde yük verememe ile kendini gösterir.

Eksantrik egzersizler (Alfredson protokolü), aşil tendinopatisinin tedavisinde altın standart olarak kabul edilmektedir. Tam yırtıklarda ise cerrahi sonrası rehabilitasyon planlanır.`,
    descEn: `Despite being the thickest and strongest tendon in the body, the Achilles tendon is sensitive to overuse and sudden loading. Runners, jumpers and middle-aged active individuals are in the risk group.

Achilles tendinopathy presents with chronic degeneration of the tendon, while an acute rupture typically manifests with a sudden popping sound and inability to bear weight on the heel.

Eccentric exercises (Alfredson protocol) are recognised as the gold standard in the treatment of Achilles tendinopathy. For complete ruptures, post-surgical rehabilitation is planned.`,
    symptomsTr: ["Topuk üstünde ağrı", "Sabah ilk adımda ağrı", "Şişlik", "Baldır arkasında sertlik", "Yük verememe (tam yırtık)"],
    symptomsEn: ["Pain above heel", "Pain on first steps in morning", "Swelling", "Stiffness at back of calf", "Inability to bear weight (complete rupture)"],
    treatmentsTr: ["Alfredson Eksantrik Protokolü", "Yük Yönetimi", "Manuel Terapi", "Ultrason / Lazer", "Kinesio Bantlama", "Topuk Yükseltici"],
    treatmentsEn: ["Alfredson Eccentric Protocol", "Load Management", "Manual Therapy", "Ultrasound / Laser", "Kinesio Taping", "Heel Raise"],
  },
  {
    slug: "plantar-fasiit",
    category: "spor",
    titleTr: "Plantar Fasiit",
    titleEn: "Plantar Fasciitis",
    summaryTr: "Ayak tabanındaki bağ dokusunun iltihaplanması sonucu oluşan, özellikle sabah ilk adımda şiddetlenen topuk ağrısı.",
    summaryEn: "Heel pain caused by inflammation of the connective tissue on the sole of the foot, particularly severe on the first steps in the morning.",
    descTr: `Plantar fasiit, ayak tabanını destekleyen kalın bağ dokusunun (plantar fasya) aşırı gerilmesi ve mikro yırtıklar oluşmasıyla gelişir. Uzun süre ayakta durma, obezite, düz taban ve yanlış ayakkabı seçimi risk faktörlerindendir.

Sabah yataktan kalkarken veya uzun süreli oturma sonrası ilk adımda hissedilen şiddetli topuk ağrısı en belirgin belirtidir. Hareket ettikçe ağrı azalabilir ancak uzun yürüyüşten sonra tekrar artar.

Fizyoterapi ile fasya germe, baldır kas güçlendirme, ultrason terapisi ve taping ile semptomlar önemli ölçüde azaltılır.`,
    descEn: `Plantar fasciitis develops when the thick connective tissue supporting the sole of the foot (plantar fascia) is overstretched and micro-tears form. Prolonged standing, obesity, flat feet and incorrect footwear are among the risk factors.

Severe heel pain felt when getting out of bed in the morning or on the first steps after prolonged sitting is the most prominent symptom. Pain may decrease with movement but worsens again after long walks.

With physiotherapy, symptoms are significantly reduced through fascia stretching, calf muscle strengthening, ultrasound therapy and taping.`,
    symptomsTr: ["Sabah topuk ağrısı", "Uzun oturma sonrası ağrı", "Ayak tabanında yanma", "Uzun yürüyüşte ağrı"],
    symptomsEn: ["Morning heel pain", "Pain after prolonged sitting", "Burning on sole of foot", "Pain on long walks"],
    treatmentsTr: ["Fasya Germe Egzersizleri", "Baldır Güçlendirme", "Ultrason Terapisi", "Kinesio Bantlama", "Ortez / Topuk Yastığı", "Buz Masajı"],
    treatmentsEn: ["Fascia Stretching Exercises", "Calf Strengthening", "Ultrasound Therapy", "Kinesio Taping", "Orthotics / Heel Pad", "Ice Massage"],
  },

  // ── NÖROLOJİK ──────────────────────────────────────────
  {
    slug: "inme-rehabilitasyonu",
    category: "noroloji",
    titleTr: "İnme Rehabilitasyonu",
    titleEn: "Stroke Rehabilitation",
    summaryTr: "Beyin damarlarının tıkanması veya kanaması sonucu oluşan inme sonrasında hareket, denge ve günlük yaşam becerilerinin yeniden kazandırılması.",
    summaryEn: "Restoration of movement, balance and daily living skills following stroke caused by blockage or bleeding of brain blood vessels.",
    descTr: `İnme, beynin bir bölümünün kan akışının kesilmesi sonucu hasar görmesiyle oluşur. Felç, güçsüzlük, konuşma güçlüğü ve denge sorunları sık görülen sonuçlardandır.

Beynin yeniden yapılanma kapasitesi (nöroplastisite) sayesinde erken dönemde başlanan yoğun fizyoterapi tedavisi, fonksiyonel iyileşmeyi dramatik biçimde artırabilir. İlk 3-6 ay en kritik dönemdir.

Bobath tekniği, yürüyüş eğitimi, üst ekstremite rehabilitasyonu ve günlük yaşam aktiviteleri eğitimi inme rehabilitasyonunun temel unsurlarıdır.`,
    descEn: `Stroke occurs when a part of the brain is damaged as a result of blood flow being cut off. Paralysis, weakness, speech difficulties and balance problems are among the common consequences.

Thanks to the brain's capacity for reorganisation (neuroplasticity), intensive physiotherapy treatment started early can dramatically improve functional recovery. The first 3-6 months are the most critical period.

The Bobath technique, gait training, upper extremity rehabilitation and activities of daily living training are the core elements of stroke rehabilitation.`,
    symptomsTr: ["Vücudun bir tarafında felç/güçsüzlük", "Yürüme güçlüğü", "Denge bozukluğu", "Konuşma güçlüğü", "Günlük aktivitelerde bağımlılık"],
    symptomsEn: ["Paralysis/weakness on one side of body", "Walking difficulty", "Balance disorder", "Speech difficulty", "Dependence in daily activities"],
    treatmentsTr: ["Bobath Tekniği", "Yürüyüş Eğitimi", "FES (Fonksiyonel Elektrik Stimülasyonu)", "Üst Ekstremite Rehabilitasyonu", "Denge Eğitimi", "GYA Eğitimi"],
    treatmentsEn: ["Bobath Technique", "Gait Training", "FES (Functional Electrical Stimulation)", "Upper Extremity Rehabilitation", "Balance Training", "ADL Training"],
  },
  {
    slug: "parkinson",
    category: "noroloji",
    titleTr: "Parkinson Hastalığı",
    titleEn: "Parkinson's Disease",
    summaryTr: "Dopamin üretiminin azalmasıyla ortaya çıkan nörodejeneratif hastalıkta titreme, sertlik ve yürüyüş bozukluklarının fizyoterapi ile yönetimi.",
    summaryEn: "Management with physiotherapy of tremor, rigidity and gait disorders in the neurodegenerative condition arising from reduced dopamine production.",
    descTr: `Parkinson hastalığı, beynin substantia nigra bölgesindeki dopamin üreten nöronların kaybıyla ortaya çıkan nörodejeneratif bir hastalıktır. Titreme, kas sertliği, yavaşlama ve postural instabilite temel motor belirtilerdir.

Fizyoterapi, Parkinson hastalığında motor belirtilerin yönetiminde, düşme riskinin azaltılmasında ve yaşam kalitesinin korunmasında kritik rol oynar. LSVT BIG programı, hastalara daha büyük ve etkili hareketler yapmaları için eğitim verir.

Denge egzersizleri, yürüyüş eğitimi ve aerobik aktiviteler Parkinson'ın ilerlemesini yavaşlatabilir.`,
    descEn: `Parkinson's disease is a neurodegenerative condition arising from the loss of dopamine-producing neurons in the substantia nigra region of the brain. Tremor, muscle rigidity, slowness and postural instability are the main motor symptoms.

Physiotherapy plays a critical role in managing motor symptoms, reducing fall risk and maintaining quality of life in Parkinson's disease. The LSVT BIG programme trains patients to make larger and more effective movements.

Balance exercises, gait training and aerobic activities can slow the progression of Parkinson's.`,
    symptomsTr: ["Dinlenme tremoru (titreme)", "Kas sertliği", "Yavaşlama (bradikinezi)", "Yürüyüş bozukluğu", "Donma epizotları", "Düşme riski"],
    symptomsEn: ["Resting tremor", "Muscle rigidity", "Slowness (bradykinesia)", "Gait disorder", "Freezing episodes", "Fall risk"],
    treatmentsTr: ["LSVT BIG Programı", "Denge ve Düşme Önleme Eğitimi", "Yürüyüş Eğitimi", "Aerobik Egzersiz", "Ritimik İşitsel Stimülasyon"],
    treatmentsEn: ["LSVT BIG Programme", "Balance and Fall Prevention Training", "Gait Training", "Aerobic Exercise", "Rhythmic Auditory Stimulation"],
  },
  {
    slug: "multipl-skleroz",
    category: "noroloji",
    titleTr: "Multipl Skleroz (MS)",
    titleEn: "Multiple Sclerosis (MS)",
    summaryTr: "Merkezi sinir sistemini etkileyen otoimmün hastalıkta yorgunluk, denge ve hareket sorunlarının rehabilitasyonla yönetimi.",
    summaryEn: "Management with rehabilitation of fatigue, balance and movement problems in the autoimmune condition affecting the central nervous system.",
    descTr: `Multipl skleroz, bağışıklık sisteminin merkezi sinir sistemine saldırması sonucu sinir liflerinin miyelin kılıfının hasara uğramasıyla oluşan otoimmün bir hastalıktır. Belirtiler bireye ve tutulum yerine göre büyük farklılıklar gösterir.

Yorgunluk, MS hastalarının %80'inden fazlasını etkileyen ve yaşam kalitesini ciddi biçimde bozan bir semptomdur. Enerji koruma stratejileri ve uygun egzersiz programı ile yorgunluk yönetilebilir.

Fizyoterapi; spastisite tedavisi, denge eğitimi, yürüyüş yardımcıları ve enerji koruma stratejileriyle MS hastalarının bağımsızlığını destekler.`,
    descEn: `Multiple sclerosis is an autoimmune condition in which the immune system attacks the central nervous system, damaging the myelin sheath of nerve fibres. Symptoms vary greatly depending on the individual and the site of involvement.

Fatigue is a symptom affecting more than 80% of MS patients and seriously disrupting quality of life. Fatigue can be managed with energy conservation strategies and an appropriate exercise programme.

Physiotherapy supports the independence of MS patients through spasticity treatment, balance training, walking aids and energy conservation strategies.`,
    symptomsTr: ["Yorgunluk", "Denge sorunları", "Spastisite", "Yürüme güçlüğü", "Görme sorunları", "Mesane disfonksiyonu"],
    symptomsEn: ["Fatigue", "Balance problems", "Spasticity", "Walking difficulty", "Visual problems", "Bladder dysfunction"],
    treatmentsTr: ["Enerji Koruma Stratejileri", "Spastisite Yönetimi", "Denge Eğitimi", "Aerobik Egzersiz", "Soğutma Teknikleri", "Yürüyüş Yardımcıları"],
    treatmentsEn: ["Energy Conservation Strategies", "Spasticity Management", "Balance Training", "Aerobic Exercise", "Cooling Techniques", "Walking Aids"],
  },

  // ── KADIN SAĞLIĞI ──────────────────────────────────────────
  {
    slug: "pelvik-taban",
    category: "kadin",
    titleTr: "Pelvik Taban Disfonksiyonu",
    titleEn: "Pelvic Floor Dysfunction",
    summaryTr: "Pelvik taban kaslarının zayıflığı veya aşırı gerginliği sonucu idrar kaçırma, pelvik ağrı ve organ sarkması gibi belirtilerle seyreden durum.",
    summaryEn: "A condition presenting with symptoms such as urinary incontinence, pelvic pain and organ prolapse resulting from weakness or excessive tension of the pelvic floor muscles.",
    descTr: `Pelvik taban, mesane, bağırsak ve uterusu destekleyen bir kas ve bağ dokusu ağıdır. Bu yapıların zayıflaması veya aşırı gerilmesi çeşitli fonksiyonel sorunlara yol açar.

Doğum, menopoz, kronik kabızlık ve obezite pelvik taban disfonksiyonunun başlıca nedenleri arasındadır. Kegel egzersizleri popüler olmakla birlikte tek başına yeterli olmayabilir; bazı vakalarda aşırı aktif kasların gevşetilmesi gerekebilir.

Pelvik taban fizyoterapisti; internal ve eksternal manuel değerlendirme, biofeedback ve özelleştirilmiş egzersiz programıyla tedavi uygular.`,
    descEn: `The pelvic floor is a network of muscles and connective tissue that supports the bladder, bowel and uterus. Weakening or excessive stretching of these structures leads to various functional problems.

Childbirth, menopause, chronic constipation and obesity are among the main causes of pelvic floor dysfunction. Kegel exercises are popular but may not be sufficient alone; in some cases the overactive muscles may need to be relaxed.

A pelvic floor physiotherapist applies treatment with internal and external manual assessment, biofeedback and a specialised exercise programme.`,
    symptomsTr: ["İdrar kaçırma", "Pelvik ağrı", "Organ sarkması hissi", "Cinsel ağrı", "Kronik kabızlık", "Mesane sıkışması"],
    symptomsEn: ["Urinary incontinence", "Pelvic pain", "Sensation of organ prolapse", "Sexual pain", "Chronic constipation", "Bladder urgency"],
    treatmentsTr: ["Pelvik Taban Egzersizleri", "Biofeedback", "Manuel Terapi", "Mesane Eğitimi", "Yaşam Tarzı Önerileri"],
    treatmentsEn: ["Pelvic Floor Exercises", "Biofeedback", "Manual Therapy", "Bladder Training", "Lifestyle Advice"],
  },
  {
    slug: "diyastaz-rekti",
    category: "kadin",
    titleTr: "Diyastaz Rekti",
    titleEn: "Diastasis Recti",
    summaryTr: "Gebelik sürecinde karın kaslarının orta hattan ayrılmasıyla oluşan ve doğum sonrası dönemde karın bütünlüğünü bozan durum.",
    summaryEn: "A condition formed during pregnancy by separation of abdominal muscles from the midline, disrupting abdominal integrity in the postpartum period.",
    descTr: `Diyastaz rekti, rektus abdominis kaslarının orta hattaki linea albayı gererek ayrılmasıyla oluşur. Gebeliklerin yaklaşık %60'ında görülür ve çoğunlukla doğum sonrasında kendiliğinden iyileşir; ancak bazı vakalarda müdahale gerekir.

Göbek çevresinde belirgin bir çöküklük, "hamile gibi görünme" ve sırt ağrısı tipik belirtilerdir. Abdominal basıncı artıran egzersizler (sit-up, ağır kaldırma) bu durumu kötüleştirebilir.

Fizyoterapi ile transversus abdominis aktivasyonu, solunum egzersizleri ve aşamalı karın güçlendirme programıyla ayrışma azaltılır.`,
    descEn: `Diastasis recti occurs when the rectus abdominis muscles separate by stretching the linea alba at the midline. It occurs in approximately 60% of pregnancies and usually resolves spontaneously after birth; however, intervention is required in some cases.

A prominent indentation around the navel, 'looking pregnant' and back pain are typical symptoms. Exercises that increase abdominal pressure (sit-ups, heavy lifting) can worsen this condition.

With physiotherapy, separation is reduced through transversus abdominis activation, breathing exercises and a progressive abdominal strengthening programme.`,
    symptomsTr: ["Göbek çevresinde çöküklük", "Karın bütünlüğünün bozulması", "Bel ağrısı", "Pelvik taban sorunları", "Karın güçsüzlüğü"],
    symptomsEn: ["Indentation around navel", "Loss of abdominal integrity", "Back pain", "Pelvic floor problems", "Abdominal weakness"],
    treatmentsTr: ["Transversus Abdominis Aktivasyonu", "Solunum Egzersizleri", "Aşamalı Karın Güçlendirme", "Postür Eğitimi", "Karın Bandı Desteği"],
    treatmentsEn: ["Transversus Abdominis Activation", "Breathing Exercises", "Progressive Abdominal Strengthening", "Postural Training", "Abdominal Binder Support"],
  },

  // ── PEDİATRİK ──────────────────────────────────────────
  {
    slug: "serebral-palsi",
    category: "pediatri",
    titleTr: "Serebral Palsi",
    titleEn: "Cerebral Palsy",
    summaryTr: "Gelişmekte olan beyinde meydana gelen hasar sonucu oluşan, hareket ve postür bozuklukları ile karakterize nörogelişimsel durum.",
    summaryEn: "A neurodevelopmental condition characterised by movement and postural disorders resulting from damage to the developing brain.",
    descTr: `Serebral palsi, doğum öncesi, sırasında veya sonrasında gelişmekte olan beyinde meydana gelen hasarın yol açtığı kalıcı ama değişkenlik gösteren hareket ve postür bozukluğudur. Spastisite, ataksi veya atetoz olarak farklı klinik tablolarda görülebilir.

Erken dönemde başlanan yoğun fizyoterapi, nöroplastisite sayesinde çocuğun motor gelişimini destekler ve bağımsızlığını artırır. Aile eğitimi ve ev programı tedavinin ayrılmaz parçasıdır.

Bobath nörogelişimsel tedavi, constraint-induced movement therapy (CIMT) ve Vojta yöntemi çocuklarda sıklıkla kullanılan yaklaşımlardır.`,
    descEn: `Cerebral palsy is a permanent but variable movement and postural disorder caused by damage to the developing brain before, during or after birth. It can present in different clinical pictures as spasticity, ataxia or athetosis.

Intensive physiotherapy started early supports the child's motor development and increases independence through neuroplasticity. Family education and home programme are an integral part of treatment.

Bobath neurodevelopmental treatment, constraint-induced movement therapy (CIMT) and the Vojta method are frequently used approaches in children.`,
    symptomsTr: ["Gecikmiş motor gelişim", "Spastisite", "Denge sorunları", "Yürüme güçlüğü", "El kullanım güçlüğü", "Postür bozukluğu"],
    symptomsEn: ["Delayed motor development", "Spasticity", "Balance problems", "Walking difficulty", "Hand use difficulty", "Postural disorder"],
    treatmentsTr: ["Bobath Nörogelişimsel Tedavi", "CIMT", "Vojta Yöntemi", "Yürüyüş Eğitimi", "Ortez Kullanımı", "Aile Eğitimi"],
    treatmentsEn: ["Bobath Neurodevelopmental Treatment", "CIMT", "Vojta Method", "Gait Training", "Orthosis Use", "Family Education"],
  },
  {
    slug: "cocuk-skolyozu",
    category: "pediatri",
    titleTr: "Çocuklarda Skolyoz",
    titleEn: "Childhood Scoliosis",
    summaryTr: "Büyüme çağındaki çocuklarda omurganın yana eğriliği; erken tanı ve Schroth egzersizleriyle ilerleme önlenebilir.",
    summaryEn: "Lateral curvature of the spine in growing children; progression can be prevented with early diagnosis and Schroth exercises.",
    descTr: `Çocukluk ve ergenlik döneminde görülen skolyoz, büyüme sürecinde omurganın yana doğru eğrilmesidir. İdiyopatik adolessan skolyoz en sık görülen formdur ve kızlarda erkeklere oranla daha yaygındır.

Cobb açısı 10-25 derece arasındaki vakalarda yoğun fizyoterapi; 25-45 derece arasında korse ile desteklenmiş fizyoterapi uygulanır. 45 derecenin üzerinde cerrahi değerlendirmesi yapılır.

Schroth metodu, çocuğun skolyoz tipine özel üç boyutlu solunum ve düzeltici egzersizler içerir. Erken başlanan tedavi, eğriliğin ilerlemesini önlemede son derece etkilidir.`,
    descEn: `Scoliosis seen in childhood and adolescence is a lateral curvature of the spine during the growth process. Idiopathic adolescent scoliosis is the most common form and is more prevalent in girls than boys.

For cases with a Cobb angle between 10-25 degrees, intensive physiotherapy is applied; for 25-45 degrees, physiotherapy supported by a brace is used. Above 45 degrees, surgical evaluation is performed.

The Schroth method contains three-dimensional breathing and corrective exercises specific to the child's scoliosis type. Treatment started early is extremely effective in preventing the progression of curvature.`,
    symptomsTr: ["Omuz yükseklik farkı", "Kaburga çıkıntısı", "Bel asimetrisi", "Sırt ağrısı (ileri vaka)", "Postür bozukluğu"],
    symptomsEn: ["Uneven shoulder height", "Rib prominence", "Waist asymmetry", "Back pain (advanced)", "Postural disorder"],
    treatmentsTr: ["Schroth Metodu", "Korse Tedavisi Desteği", "Postür Eğitimi", "Solunum Egzersizleri", "Aile ve Okul Eğitimi"],
    treatmentsEn: ["Schroth Method", "Brace Treatment Support", "Postural Training", "Breathing Exercises", "Family and School Education"],
  },
];

export type Disease = typeof diseases[0];
export type Category = typeof categories[0];