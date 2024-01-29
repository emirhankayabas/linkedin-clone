import NewPost from "./components/NewPost";
import Posts from "./components/Posts";

export default function Content() {
  const data = [
    {
      id: 1,
      author: {
        name: "Harley West",
        job: "Photographer",
        avatar: "https://i.pravatar.cc/309",
      },
      date: "1 gün",
      content:
        "Hollywood, dünya sinema endüstrisinin merkezi ve sembolüdür. Burası, binlerce film yapımcısını, oyuncuyu ve sanatçıyı ağırlayan bir eğlence mekanıdır. Hollywood'un tarihi, büyüleyici kariyer hikayeleri, ünlü film stüdyoları ve Kuzey Amerika sinemasının gelişimine olan katkılarıyla doludur. Hollywood, kültürel etkisi ve ticari gücüyle dünya çapında tanınmış bir simge haline gelmiştir.",
      images: [
        "https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      social_counts: {
        like: 793,
        comment: 96,
        share: 42,
      },
    },
    {
      id: 2,
      author: {
        name: "Blaine Mason",
        job: "Writer",
        avatar: "https://i.pravatar.cc/306",
      },
      date: "1 gün",
      content:
        "Yapay zeka tarafından çekilen bir fotoğraf, karmaşık algoritmalar ve öğrenme modelleriyle işlenmiş bir görseldir. Bu fotoğraflar, insan gözünden farklı bir bakış açısı sunabilir ve önceden belirlenmiş özellikleri vurgulayabilir. Yapay zeka sayesinde çekilen fotoğraflar, sanat ve teknoloji arasındaki benzersiz bir kesişim noktasını temsil eder, aynı zamanda insanın yaratıcılığını ve teknolojik ilerlemeyi bir araya getirir.",
      images: [
        "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D",
      ],
      social_counts: {
        like: 793,
        comment: 96,
        share: 42,
      },
    },
    {
      id: 3,
      author: {
        name: "Blake Lucas",
        job: "Traveler",
        avatar: "https://i.pravatar.cc/307",
      },
      date: "3 gün",
      content:
        "Manzara resimleri, doğanın güzelliklerini ve atmosferini yansıtan görsel şölenlerdir. Renklerin uyumu, perspektifin derinliği ve doğal unsurların detaylarıyla manzara resimleri izleyicilere huzur ve ilham verir.",
      images: [
        "https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      social_counts: {
        like: 397,
        comment: 69,
        share: 24,
      },
    },
    {
      id: 4,
      author: {
        name: "Skylar Grant",
        job: "Graphic Artist",
        avatar: "https://i.pravatar.cc/308",
      },
      date: "4 gün",
      content:
        "Ünlü ressamların eserleri, sanat dünyasında büyük etki yaratır ve geniş bir hayran kitlesine sahiptir. Her ressamın tarzı ve tekniği farklı olsa da, eserlerinde duygu, hayal gücü ve ustalıkla birleşen benzersiz bir ifade vardır.",
      images: [
        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1698618/pexels-photo-1698618.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
      ],
      social_counts: {
        like: 397,
        comment: 69,
        share: 24,
      },
    },
  ];

  return (
    <main className="flex-1 w-full">
      <NewPost />
      <Posts posts={data} />
    </main>
  );
}
