import styles from './BulgarianHistory.module.css';

export default function BulgarianHistory() {
    return (
        <section className={styles['bulgarian-history']}>
            <h2 className={styles['section-title']}>History</h2>
            <div className={styles['wiki-navigate']}>
                <a
                    href="https://en.wikipedia.org/wiki/Bulgaria"
                    target="_blank"
                >
                    Here you can find more information about Bulgaria
                </a>
            </div>
            <article className={styles['history-section-item']}>
                <h3 className={styles['article-title']}>
                    Prehistory and Antiquity
                </h3>
                <div className={styles['artice-img']}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sofia_-_Odrysian_Wreath_from_Golyamata_Mogila.jpg/170px-Sofia_-_Odrysian_Wreath_from_Golyamata_Mogila.jpg"
                        alt=""
                    />
                </div>
                <p className={styles['article-description']}>
                    Neanderthal remains dating to around 150,000 years ago, or
                    the Middle Paleolithic, are some of the earliest traces of
                    human activity in the lands of modern Bulgaria. Remains from
                    Homo sapiens found there are dated c. 47,000 years BP. This
                    result represents the earliest arrival of modern humans in
                    Europe. The Karanovo culture arose c. 6,500 BC and was one
                    of several Neolithic societies in the region that thrived on
                    agriculture. The Copper Age Varna culture (fifth millennium
                    BC) is credited with inventing gold metallurgy. The
                    associated Varna Necropolis treasure contains the oldest
                    golden jewellery in the world with an approximate age of
                    over 6,000 years. The treasure has been valuable for
                    understanding social hierarchy and stratification in the
                    earliest European societies. The Thracians, one of the three
                    primary ancestral groups of modern Bulgarians, appeared on
                    the Balkan Peninsula some time before the 12th century BC.
                    The Thracians excelled in metallurgy and gave the Greeks the
                    Orphean and Dionysian cults, but remained tribal and
                    stateless. The Persian Achaemenid Empire conquered parts of
                    present-day Bulgaria (in particular eastern Bulgaria) in the
                    6th century BC and retained control over the region until
                    479 BC. The invasion became a catalyst for Thracian unity,
                    and the bulk of their tribes united under king Teres to form
                    the Odrysian kingdom in the 470s BC. It was weakened and
                    vassalised by Philip II of Macedon in 341 BC, attacked by
                    Celts in the 3rd century, and finally became a province of
                    the Roman Empire in AD 45. By the end of the 1st century AD,
                    Roman governance was established over the entire Balkan
                    Peninsula and Christianity began spreading in the region
                    around the 4th century. The Gothic Bible—the first Germanic
                    language book—was created by Gothic bishop Ulfilas in what
                    is today northern Bulgaria around 381. The region came under
                    Byzantine control after the fall of Rome in 476. The
                    Byzantines were engaged in prolonged warfare against Persia
                    and could not defend their Balkan territories from barbarian
                    incursions. This enabled the Slavs to enter the Balkan
                    Peninsula as marauders, primarily through an area between
                    the Danube River and the Balkan Mountains known as Moesia.
                    Gradually, the interior of the peninsula became a country of
                    the South Slavs, who lived under a democracy. The Slavs
                    assimilated the partially Hellenised, Romanised, and
                    Gothicised Thracians in the rural areas.
                </p>
            </article>

            <article className={styles['history-section-item']}>
                <h3 className={styles['article-title']}>
                    First Bulgarian Empire
                </h3>
                <div className={styles['artice-img']}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Borismeetingdisciples.JPG/250px-Borismeetingdisciples.JPG"
                        alt="img"
                    />
                </div>
                <p className={styles['article-description']}>
                    Not long after the Slavic incursion, Moesia was once again
                    invaded, this time by the Bulgars under Khan Asparukh. Their
                    horde was a remnant of Old Great Bulgaria, an extinct tribal
                    confederacy situated north of the Black Sea in what is now
                    Ukraine and southern Russia. Asparukh attacked Byzantine
                    territories in Moesia and conquered the Slavic tribes there
                    in 680. A peace treaty with the Byzantine Empire was signed
                    in 681, marking the foundation of the First Bulgarian
                    Empire. The minority Bulgars formed a close-knit ruling
                    caste. Succeeding rulers strengthened the Bulgarian state
                    throughout the 8th and 9th centuries. Krum introduced a
                    written code of lawand checked a major Byzantine incursion
                    at the Battle of Pliska, in which Byzantine emperor
                    Nicephorus I was killed. Boris I abolished paganism in
                    favour of Eastern Orthodox Christianity in 864. The
                    conversion was followed by a Byzantine recognition of the
                    Bulgarian churchand the adoption of the Cyrillic alphabet,
                    developed in the capital, Preslav. The common language,
                    religion and script strengthened central authority and
                    gradually fused the Slavs and Bulgars into a unified people
                    speaking a single Slavic language. A golden age began during
                    the 34-year rule of Simeon the Great, who oversaw the
                    largest territorial expansion of the state. After Simeon's
                    death, Bulgaria was weakened by wars with Magyars and
                    Pechenegs and the spread of the Bogomil heresy. Preslav was
                    seized by the Byzantine army in 971 after consecutive Rus'
                    and Byzantine invasions. The empire briefly recovered from
                    the attacks under Samuil, but this ended when Byzantine
                    emperor Basil II defeated the Bulgarian army at Klyuch in
                    1014. Samuil died shortly after the battle, and by 1018 the
                    Byzantines had conquered the First Bulgarian Empire. After
                    the conquest, Basil II prevented revolts by retaining the
                    rule of local nobility, integrating them in Byzantine
                    bureaucracy and aristocracy, and relieving their lands of
                    the obligation to pay taxes in gold, allowing tax in kind
                    instead. The Bulgarian Patriarchate was reduced to an
                    archbishopric, but retained its autocephalous status and its
                    dioceses.
                </p>
            </article>
        </section>
    );
}
