export const treatments = [
  {
    slug: "omurga",
    icon: "Zap",
    titleTr: "Omurga Sağlığı",
    titleEn: "Spinal Health",
    shortTr: "Bel fıtığı, boyun tutulması ve omurga kaymasına yönelik tedavi yöntemleri.",
    shortEn: "Treatment methods for disc herniation, neck stiffness and spondylolisthesis.",
    descTr: `Omurga, vücudumuzun taşıyıcı eksenidir ve sinir sisteminin korunmasında kritik bir rol üstlenir. Yanlış duruş, ağır yük taşıma, hareketsiz yaşam tarzı veya travma sonucunda omurgada çeşitli rahatsızlıklar gelişebilir.

Bel fıtığı, omurlar arasındaki diskin yerinden kaymasıyla oluşur ve sinirlere baskı yaparak bacaklara yayılan ağrıya neden olabilir. Boyun fıtığı ise kolları etkileyen uyuşma ve güçsüzlüğe yol açabilir.

Fizyoterapi, omurga sorunlarının büyük çoğunluğunda ameliyata gerek kalmadan etkili sonuçlar sağlar. Manuel terapi, traksiyon ve özel egzersiz programlarıyla ağrı giderilir, hareket açıklığı artırılır ve yeniden yaralanma riski azaltılır.`,
    descEn: `The spine is the load-bearing axis of the body and plays a critical role in protecting the nervous system. Various conditions can develop in the spine as a result of poor posture, heavy lifting, a sedentary lifestyle or trauma.

Disc herniation occurs when the disc between vertebrae slips out of place, which can press on nerves and cause pain radiating to the legs. Cervical herniation can lead to numbness and weakness affecting the arms.

Physiotherapy produces effective results for the vast majority of spinal problems without the need for surgery. Pain is relieved through manual therapy, traction and specialised exercise programmes, range of motion is increased and the risk of re-injury is reduced.`,
    symptomsTr: ["Bel ağrısı", "Boyun tutulması", "Disk fıtığı", "Skolyoz", "Omurga kayması", "Siyatik sinir ağrısı", "Bacaklara yayılan ağrı", "El ve kollarda uyuşma"],
    symptomsEn: ["Lower back pain", "Neck stiffness", "Disc herniation", "Scoliosis", "Spondylolisthesis", "Sciatic nerve pain", "Pain radiating to legs", "Numbness in hands and arms"],
    methodsTr: ["Manuel Terapi", "Traksiyon", "Egzersiz Terapisi", "TENS / Ultrason", "Postür Eğitimi", "McKenzie Metodu"],
    methodsEn: ["Manual Therapy", "Traction", "Exercise Therapy", "TENS / Ultrasound", "Posture Training", "McKenzie Method"],
    conditionsTr: [
      { name: "Bel Fıtığı", desc: "Lomber disk hernisi, bel bölgesindeki diskin sinir köküne baskı yapmasıyla oluşur. Bacaklara yayılan ağrı ve uyuşma temel belirtilerdir." },
      { name: "Boyun Fıtığı", desc: "Servikal disk hernisi, boyun bölgesindeki diskin omuriliğe veya sinir köklerine baskı yapmasıyla ortaya çıkar." },
      { name: "Skolyoz", desc: "Omurganın yana doğru anormal eğriliğidir. Erken tanı ve egzersiz programları ilerlemeyi yavaşlatabilir." },
      { name: "Siyatik Sinir Ağrısı", desc: "Siyatik sinire baskı sonucu kalçadan bacağa yayılan şiddetli ağrı ile karakterizedir." },
    ],
    conditionsEn: [
      { name: "Lumbar Disc Herniation", desc: "Lumbar disc herniation occurs when a disc in the lower back presses on a nerve root. Pain and numbness radiating to the legs are the main symptoms." },
      { name: "Cervical Disc Herniation", desc: "Cervical disc herniation occurs when a disc in the neck presses on the spinal cord or nerve roots." },
      { name: "Scoliosis", desc: "An abnormal lateral curvature of the spine. Early diagnosis and exercise programmes can slow progression." },
      { name: "Sciatic Nerve Pain", desc: "Characterised by severe pain radiating from the hip to the leg as a result of pressure on the sciatic nerve." },
    ],
  },
  {
    slug: "spor",
    icon: "Activity",
    titleTr: "Spor Yaralanmaları",
    titleEn: "Sports Injuries",
    shortTr: "Ligament yırtığı, kas gerilmesi ve tendon iltihabı gibi spor kaynaklı rahatsızlıklar.",
    shortEn: "Sports-related conditions such as ligament tears, muscle strains and tendon inflammation.",
    descTr: `Spor yaralanmaları, hem profesyonel atletleri hem de aktif bireyleri etkileyen yaygın sağlık sorunlarıdır. Ani hareketler, çarpışmalar veya aşırı kullanım sonucu meydana gelen bu yaralanmalar, doğru tedavi edilmediğinde kronik sorunlara dönüşebilir.

Akut yaralanmalarda (burkulma, yırtık, kırık) erken fizyoterapi müdahalesi ödem kontrolü, ağrı yönetimi ve doku iyileşmesini hızlandırır. Kronik yaralanmalarda ise zeminde yatan kas dengesizlikleri ve biyomekanik bozukluklar ele alınır.

Spor fizyoterapisi yalnızca tedaviyle sınırlı kalmaz; aynı zamanda sporcunun yeniden yaralanmadan korunması ve performansının artırılması için kapsamlı bir program sunar.`,
    descEn: `Sports injuries are common health problems affecting both professional athletes and active individuals. These injuries, which occur as a result of sudden movements, collisions or overuse, can turn into chronic problems if not treated correctly.

In acute injuries (sprains, tears, fractures), early physiotherapy intervention speeds up oedema control, pain management and tissue healing. In chronic injuries, underlying muscle imbalances and biomechanical disorders are addressed.

Sports physiotherapy is not limited to treatment alone; it also offers a comprehensive programme for protecting the athlete from re-injury and improving performance.`,
    symptomsTr: ["Ligament yırtığı", "Kas gerilmesi", "Tendon iltihabı", "Stres kırıkları", "Eklem çıkığı", "Menisküs hasarı", "Rotator manşet yırtığı"],
    symptomsEn: ["Ligament tear", "Muscle strain", "Tendon inflammation", "Stress fractures", "Joint dislocation", "Meniscus damage", "Rotator cuff tear"],
    methodsTr: ["Kinesio Bant", "Dry Needling", "PNF Teknikleri", "Fonksiyonel Antrenman", "Buz / Isı Terapisi", "Ultrason Terapisi"],
    methodsEn: ["Kinesio Taping", "Dry Needling", "PNF Techniques", "Functional Training", "Ice / Heat Therapy", "Ultrasound Therapy"],
    conditionsTr: [
      { name: "ACL Yırtığı", desc: "Ön çapraz bağ yırtığı, diz ekleminin stabilitesini bozar. Cerrahi veya konservatif fizyoterapi ile tedavi edilir." },
      { name: "Tenisçi Dirseği", desc: "Lateral epikondilit olarak da bilinen bu durum, dirsek dış tarafında ağrı ve güçsüzlüğe neden olur." },
      { name: "Aşil Tendonu Yaralanmaları", desc: "Aşil tendonunun iltihabı veya yırtığı, koşucularda ve atlayıcılarda sıkça görülür." },
      { name: "Menisküs Hasarı", desc: "Diz eklemindeki kıkırdak yapının yırtılmasıdır. Ağrı, şişlik ve diz kilitlenmesi ile kendini gösterir." },
    ],
    conditionsEn: [
      { name: "ACL Tear", desc: "Anterior cruciate ligament tear disrupts the stability of the knee joint. Treated with surgical or conservative physiotherapy." },
      { name: "Tennis Elbow", desc: "Also known as lateral epicondylitis, this condition causes pain and weakness on the outer side of the elbow." },
      { name: "Achilles Tendon Injuries", desc: "Inflammation or rupture of the Achilles tendon is commonly seen in runners and jumpers." },
      { name: "Meniscus Damage", desc: "Tearing of the cartilage structure in the knee joint. Manifests with pain, swelling and knee locking." },
    ],
  },
  {
    slug: "ortopedi",
    icon: "Bone",
    titleTr: "Ortopedik Rehabilitasyon",
    titleEn: "Orthopaedic Rehabilitation",
    shortTr: "Ameliyat sonrası eklem hareketliliği ve kas gücünün yeniden kazanılması.",
    shortEn: "Regaining joint mobility and muscle strength following surgical procedures.",
    descTr: `Ortopedik ameliyatlar sonrasında yapılan rehabilitasyon, cerrahi müdahale kadar önemlidir. İyi planlanmış bir rehabilitasyon programı; iyileşme süresini kısaltır, komplikasyon riskini azaltır ve hastanın bağımsız yaşam becerilerini hızla geri kazanmasını sağlar.

Diz ve kalça protezi ameliyatları sonrasında eklem hareket açıklığının yeniden kazanılması, kas güçlendirme ve denge egzersizleri rehabilitasyonun temelini oluşturur. Omuz ameliyatları sonrasında ise rotator manşet kaslarının güçlendirilmesi ve omuz stabilitesinin sağlanması önceliklendirilir.

Rehabilitasyon süreci kişiye özel aşamalar halinde ilerler ve hastanın iyileşme hızına göre adapte edilir.`,
    descEn: `Rehabilitation following orthopaedic surgery is just as important as the surgical intervention itself. A well-planned rehabilitation programme shortens recovery time, reduces the risk of complications and enables the patient to quickly regain independent living skills.

After knee and hip replacement surgery, regaining joint range of motion, muscle strengthening and balance exercises form the basis of rehabilitation. After shoulder surgery, strengthening the rotator cuff muscles and ensuring shoulder stability are prioritised.

The rehabilitation process progresses in personalised stages and is adapted according to the patient's rate of recovery.`,
    symptomsTr: ["Diz protezi sonrası", "Kalça protezi sonrası", "Omuz ameliyatı sonrası", "Kırık iyileşmesi", "ACL rekonstrüksiyonu", "Omurga cerrahisi sonrası"],
    symptomsEn: ["Post knee replacement", "Post hip replacement", "Post shoulder surgery", "Fracture healing", "ACL reconstruction", "Post spinal surgery"],
    methodsTr: ["Eklem Mobilizasyonu", "Güçlendirme Egzersizleri", "Denge Eğitimi", "Hidroterapi", "Elektroterapi", "Yürüyüş Eğitimi"],
    methodsEn: ["Joint Mobilisation", "Strengthening Exercises", "Balance Training", "Hydrotherapy", "Electrotherapy", "Gait Training"],
    conditionsTr: [
      { name: "Diz Protezi Rehabilitasyonu", desc: "Total diz artroplastisi sonrası erken mobilizasyon ve güçlendirme programı ile tam fonksiyonelliğe dönüş hedeflenir." },
      { name: "Kalça Protezi Rehabilitasyonu", desc: "Kalça ekleminin yeniden yapılanması sürecinde yürüyüş eğitimi ve kas dengesinin sağlanması kritik öneme sahiptir." },
      { name: "Kırık Rehabilitasyonu", desc: "Kırık iyileşmesi sonrasında oluşan kas atrofisi ve eklem sertliği fizyoterapi ile giderilir." },
      { name: "Omuz Rehabilitasyonu", desc: "Rotator manşet onarımı veya bankart tamiri sonrasında omuz hareket açıklığı ve kuvveti yeniden kazandırılır." },
    ],
    conditionsEn: [
      { name: "Knee Replacement Rehabilitation", desc: "After total knee arthroplasty, early mobilisation and a strengthening programme aim to return to full functionality." },
      { name: "Hip Replacement Rehabilitation", desc: "Gait training and ensuring muscle balance are critically important in the restructuring process of the hip joint." },
      { name: "Fracture Rehabilitation", desc: "Muscle atrophy and joint stiffness that occur after fracture healing are resolved with physiotherapy." },
      { name: "Shoulder Rehabilitation", desc: "After rotator cuff repair or Bankart repair, shoulder range of motion and strength are restored." },
    ],
  },
  {
    slug: "noroloji",
    icon: "Brain",
    titleTr: "Nörolojik Rehabilitasyon",
    titleEn: "Neurological Rehabilitation",
    shortTr: "İnme, Parkinson ve multipl skleroz gibi nörolojik hastalıklarda yaşam kalitesi.",
    shortEn: "Quality of life in neurological conditions such as stroke, Parkinson's and MS.",
    descTr: `Nörolojik hastalıklar, hareket, denge, koordinasyon ve günlük yaşam aktiviteleri üzerinde derin etkiler bırakabilir. Nörolojik rehabilitasyonun temel amacı, beynin ve sinir sisteminin yeniden yapılanma kapasitesini (nöroplastisite) kullanarak kayıp işlevlerin geri kazanılmasıdır.

İnme rehabilitasyonu, hastanın mümkün olan en kısa sürede bağımsızlığını yeniden kazanmasını hedefler. Erken dönemde başlanan yoğun rehabilitasyon, fonksiyonel iyileşmeyi önemli ölçüde artırır.

Parkinson hastalığında denge bozukluğu, yürüme güçlüğü ve düşme riski fizyoterapi ile yönetilebilir. Multipl skleroz hastalarında ise yorgunluk yönetimi, spastisite tedavisi ve fonksiyonel kapasitenin korunması öncelikli hedefler arasındadır.`,
    descEn: `Neurological conditions can have profound effects on movement, balance, coordination and activities of daily living. The primary aim of neurological rehabilitation is to recover lost functions by utilising the brain's and nervous system's capacity for reorganisation (neuroplasticity).

Stroke rehabilitation aims to help the patient regain independence as quickly as possible. Intensive rehabilitation started in the early period significantly improves functional recovery.

Balance disorders, walking difficulties and fall risk in Parkinson's disease can be managed with physiotherapy. For multiple sclerosis patients, fatigue management, spasticity treatment and maintaining functional capacity are among the priority goals.`,
    symptomsTr: ["İnme sonrası", "Multipl Skleroz", "Parkinson hastalığı", "Sinir sıkışması", "Periferik sinir hasarı", "Serebral palsi", "Omurilik yaralanması"],
    symptomsEn: ["Post-stroke", "Multiple Sclerosis", "Parkinson's disease", "Nerve entrapment", "Peripheral nerve damage", "Cerebral palsy", "Spinal cord injury"],
    methodsTr: ["Bobath Tekniği", "FES", "Yürüyüş Eğitimi", "Denge Terapisi", "Bilişsel Rehabilitasyon", "Robotik Rehabilitasyon"],
    methodsEn: ["Bobath Technique", "FES", "Gait Training", "Balance Therapy", "Cognitive Rehabilitation", "Robotic Rehabilitation"],
    conditionsTr: [
      { name: "İnme Rehabilitasyonu", desc: "İnme sonrası felç veya güçsüzlük yaşayan hastalarda erken dönem yoğun fizyoterapi ile fonksiyonel iyileşme hızlandırılır." },
      { name: "Parkinson Hastalığı", desc: "Denge bozukluğu, titreme ve yürüyüş güçlükleri için özelleştirilmiş egzersiz ve denge programları uygulanır." },
      { name: "Multipl Skleroz", desc: "Yorgunluk yönetimi, spastisite tedavisi ve fonksiyonel kapasitenin korunması temel hedeflerdir." },
      { name: "Periferik Sinir Hasarı", desc: "Sinir hasarı sonrası duyusal ve motor kayıpların rehabilitasyonu için özel programlar uygulanır." },
    ],
    conditionsEn: [
      { name: "Stroke Rehabilitation", desc: "Functional recovery is accelerated with intensive early physiotherapy in patients experiencing paralysis or weakness after stroke." },
      { name: "Parkinson's Disease", desc: "Specialised exercise and balance programmes are applied for balance disorders, tremor and walking difficulties." },
      { name: "Multiple Sclerosis", desc: "Fatigue management, spasticity treatment and maintaining functional capacity are the primary goals." },
      { name: "Peripheral Nerve Damage", desc: "Special programmes are applied for rehabilitation of sensory and motor losses following nerve damage." },
    ],
  },
  {
    slug: "kadin",
    icon: "Heart",
    titleTr: "Kadın Sağlığı",
    titleEn: "Women's Health",
    shortTr: "Gebelik, doğum sonrası ve pelvik taban rehabilitasyonuna özel tedaviler.",
    shortEn: "Treatments specific to pregnancy, postpartum recovery and pelvic floor rehabilitation.",
    descTr: `Kadın sağlığı fizyoterapisi, kadının yaşam döngüsünün her evresinde karşılaşabileceği özel sorunlara yönelik uzmanlaşmış bir alandır. Gebelik döneminde değişen vücut mekanikleri bel ağrısı, pelvik kuşak ağrısı ve diğer kas-iskelet sistemi sorunlarına yol açabilir.

Doğum sonrası dönemde pelvik taban kaslarının zayıflaması, diyastaz rekti (karın kaslarının ayrılması) ve sezaryen skar dokusu gibi sorunlar fizyoterapi ile etkin biçimde tedavi edilebilir.

Pelvik taban rehabilitasyonu; idrar kaçırma, pelvik organ sarkması ve kronik pelvik ağrı gibi yaşam kalitesini ciddi ölçüde etkileyen durumlar için özelleştirilmiş tedavi sunar.`,
    descEn: `Women's health physiotherapy is a specialised field addressing specific problems that women may encounter at every stage of their life cycle. Changing body mechanics during pregnancy can lead to lower back pain, pelvic girdle pain and other musculoskeletal problems.

In the postpartum period, problems such as weakening of the pelvic floor muscles, diastasis recti (separation of abdominal muscles) and caesarean scar tissue can be effectively treated with physiotherapy.

Pelvic floor rehabilitation offers specialised treatment for conditions that seriously affect quality of life, such as urinary incontinence, pelvic organ prolapse and chronic pelvic pain.`,
    symptomsTr: ["Pelvik ağrı", "İdrar kaçırma", "Doğum sonrası iyileşme", "Diyastaz rekti", "Gebelik bel ağrısı", "Pelvik organ sarkması", "Sezaryen skar ağrısı"],
    symptomsEn: ["Pelvic pain", "Urinary incontinence", "Postpartum recovery", "Diastasis recti", "Pregnancy back pain", "Pelvic organ prolapse", "Caesarean scar pain"],
    methodsTr: ["Pelvik Taban Egzersizleri", "Manuel Terapi", "Biofeedback", "Postür Eğitimi", "Solunum Teknikleri", "Skar Doku Tedavisi"],
    methodsEn: ["Pelvic Floor Exercises", "Manual Therapy", "Biofeedback", "Postural Training", "Breathing Techniques", "Scar Tissue Treatment"],
    conditionsTr: [
      { name: "Pelvik Taban Disfonksiyonu", desc: "Pelvik taban kaslarının zayıflığı veya aşırı gerginliği sonucu oluşan çeşitli semptomlar fizyoterapi ile tedavi edilir." },
      { name: "Gebelik Ağrıları", desc: "Gebelik sürecinde oluşan bel, kalça ve pelvik kuşak ağrıları için güvenli egzersiz programları uygulanır." },
      { name: "Doğum Sonrası Rehabilitasyon", desc: "Doğum sonrası kas güçsüzlüğü, diyastaz rekti ve pelvik taban sorunlarının tedavisi planlanır." },
      { name: "İdrar Kaçırma", desc: "Stres tipi veya sıkışma tipi idrar kaçırma için pelvik taban egzersizleri ve biofeedback ile etkin tedavi sunulur." },
    ],
    conditionsEn: [
      { name: "Pelvic Floor Dysfunction", desc: "Various symptoms resulting from weakness or excessive tension of the pelvic floor muscles are treated with physiotherapy." },
      { name: "Pregnancy Pain", desc: "Safe exercise programmes are applied for back, hip and pelvic girdle pain occurring during pregnancy." },
      { name: "Postpartum Rehabilitation", desc: "Treatment of postpartum muscle weakness, diastasis recti and pelvic floor problems is planned." },
      { name: "Urinary Incontinence", desc: "Effective treatment for stress-type or urgency-type urinary incontinence with pelvic floor exercises and biofeedback." },
    ],
  },
  {
    slug: "manuel",
    icon: "Hand",
    titleTr: "Manuel Terapi",
    titleEn: "Manual Therapy",
    shortTr: "El becerisine dayalı eklem mobilizasyonu ve yumuşak doku teknikleri.",
    shortEn: "Hands-on joint mobilisation and soft tissue techniques.",
    descTr: `Manuel terapi, fizyoterapistin elleriyle doğrudan uyguladığı çeşitli teknikleri kapsayan özelleşmiş bir tedavi yaklaşımıdır. Eklem mobilizasyonu, manipülasyon ve yumuşak doku teknikleri bu yaklaşımın temel unsurlarını oluşturur.

Eklem mobilizasyonu; sertleşmiş eklemlerin hareket açıklığını artırmak ve ağrıyı azaltmak amacıyla kontrollü pasif hareketlerle uygulanır. Manipülasyon ise daha hızlı ve kısa genlikli hareketlerle eklem bloklarını gidermek için kullanılır.

Miyofasyal gevşetme teknikleri, kas ve bağ dokusundaki gerginlikleri azaltarak dolaşımı iyileştirir ve ağrıyı hafifletir. Trigger point terapisi ise kas içindeki hassas noktalara odaklanarak kronik ağrı döngüsünü kırmayı hedefler.`,
    descEn: `Manual therapy is a specialised treatment approach encompassing various techniques applied directly with the physiotherapist's hands. Joint mobilisation, manipulation and soft tissue techniques form the core elements of this approach.

Joint mobilisation is applied with controlled passive movements to increase the range of motion of stiffened joints and reduce pain. Manipulation uses faster, shorter-amplitude movements to resolve joint blockages.

Myofascial release techniques improve circulation and relieve pain by reducing tension in muscle and connective tissue. Trigger point therapy focuses on sensitive points within muscles, aiming to break the chronic pain cycle.`,
    symptomsTr: ["Kronik ağrı", "Eklem sertliği", "Kas gerginliği", "Baş ağrısı", "Boyun ağrısı", "Sırt ağrısı", "Çene eklemi sorunları"],
    symptomsEn: ["Chronic pain", "Joint stiffness", "Muscle tension", "Headaches", "Neck pain", "Back pain", "Temporomandibular joint problems"],
    methodsTr: ["Eklem Mobilizasyonu", "Miyofasyal Gevşetme", "Trigger Point Terapisi", "Dry Needling", "Kraniosakral Terapi", "Visceral Manipülasyon"],
    methodsEn: ["Joint Mobilisation", "Myofascial Release", "Trigger Point Therapy", "Dry Needling", "Craniosacral Therapy", "Visceral Manipulation"],
    conditionsTr: [
      { name: "Kronik Bel ve Boyun Ağrısı", desc: "Uzun süreli ağrı sendromlarında manuel terapi, ilaç tedavisine ihtiyacı azaltarak etkili ağrı yönetimi sağlar." },
      { name: "Gerilim Tipi Baş Ağrısı", desc: "Boyun ve omuz kaslarındaki gerginlikten kaynaklanan baş ağrıları manuel terapi ile önemli ölçüde azaltılabilir." },
      { name: "Çene Eklemi Bozuklukları", desc: "TME (temporomandibuler eklem) sorunlarında çene ağrısı ve hareket kısıtlılığı manuel tekniklerle giderilir." },
      { name: "Miyofasyal Ağrı Sendromu", desc: "Kas içindeki trigger pointlerin neden olduğu yaygın ağrı ve hassasiyet özel tekniklerle tedavi edilir." },
    ],
    conditionsEn: [
      { name: "Chronic Back and Neck Pain", desc: "In long-term pain syndromes, manual therapy provides effective pain management by reducing the need for medication." },
      { name: "Tension-Type Headache", desc: "Headaches originating from tension in neck and shoulder muscles can be significantly reduced with manual therapy." },
      { name: "Temporomandibular Joint Disorders", desc: "Jaw pain and restricted movement in TMJ problems are resolved with manual techniques." },
      { name: "Myofascial Pain Syndrome", desc: "Widespread pain and tenderness caused by trigger points within muscles are treated with specialised techniques." },
    ],
  },
];

export type Treatment = typeof treatments[0];