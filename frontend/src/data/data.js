const data = {
  buses: [
    {
      time: "12:10 AM",
      bus_name: "KSRTC Delux",
      from: "Trivandrum",
      to: "Kozhikode",
      imageUrl:
        "https://i0.wp.com/mytnstc.com/wp-content/uploads/2020/08/Trivandrum-To-Bangalore-KSRTC-COVID19-Onam-Special-Super-Deluxe-Bus-Service.jpg?ssl=1",
      available_seats: "52",
      rate: "125",
    },
    {
      time: "01:20 AM",
      bus_name: "CERA",
      from: "Kottayam",
      to: "Kannur",
      imageUrl: "https://i.ytimg.com/vi/FUjxeXzZkek/maxresdefault.jpg",
      available_seats: "60",
      rate: "170",
    },
    {
      time: "02:00 AM",
      bus_name: "KSRTC Minnal",
      from: "Trivandrum",
      to: "Palakkad",
      imageUrl: "https://pbs.twimg.com/media/DILdRJpVYAAPmzj.jpg",
      available_seats: "65",
      rate: "180",
    },
    {
      time: "02:45 AM",
      bus_name: "KSRTC SuperFast",
      from: "Ernakulam",
      to: "Trissur",
      imageUrl:
        "http://3.bp.blogspot.com/-tjV3AEuzt_E/VRIicES0bII/AAAAAAAA6d8/1fbPVA3zqxY/s1600/RNE%2B949.jpg",
      available_seats: "52",
      rate: "",
    },
    {
      time: "03:00 AM",
      bus_name: "KSRTC Garuda",
      from: "Trivandrum",
      to: "Banglore",
      imageUrl:
        "https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/KSRTC-1206019851-1534533562.jpg",
      available_seats: "72",
      rate: "03:40",
    },
    {
      time: "06:00 AM",
      bus_name: "KSRTC Minnal",
      from: "Trivandrum",
      to: "Kasargod",
      imageUrl:
        "https://akm-img-a-in.tosshub.com/lingo/itml/images/story/202204/minnal-sixteen_nine.jpg?size=1200:675",
      available_seats: "52",
      rate: "200",
    },
    {
      time: "08:30 AM",
      bus_name: "KSRTC SuperFast",
      from: "Ernakulam",
      to: "Malappuram",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWusl9FOsxatkKraRxQo25W89lxD5bKmaHCg&usqp=CAU",
      available_seats: "52",
      rate: "180",
    },
    {
      time: "09:10 AM",
      bus_name: "KSRTC Lowfloor",
      from: "Ernakulam",
      to: "Kozhikode",
      imageUrl:
        "https://www.aanavandi.com/blog/wp-content/uploads/2012/08/JNT-low-floor-volvo-to-bangalore1.jpg",
      available_seats: "58",
      rate: "200",
    },
    {
      time: "10:15 AM",
      bus_name: "KSRTC SuperFast",
      from: "Trissur",
      to: "Munnar",
      imageUrl:
        "https://i0.wp.com/fottam.com/wp-content/uploads/2021/01/KSRTC-Superfast-full-length-RPK124-clean.jpg?fit=1920%2C1078&ssl=1",
      available_seats: "52",
      rate: "150",
    },
    {
      time: "11:30 AM",
      bus_name: "Kallada",
      from: "Trivandrum",
      to: "Banglore",
      imageUrl:
        "https://contactdetailswala.in/wp-content/uploads/2018/04/Kallada-Travels-1.jpg",
      available_seats: "68",
      rate: "170",
    },
  ],
  places: [
    {
      name: "Thiruvananthapuram",
      cities: [
        "Thiruvananthapuram",
        "Neyyattinkara",
        "Attingal",
        "Nedumangad",
        "Varkala",
        "Kattakada",
        "Venjaramoodu",
      ],
    },
    {
      name: "Kollam",
      cities: [
        "Kollam",
        "Paravur",
        "Punalur",
        "Karunagappally",
        "Pathanamthitta",
        "Adoor",
        "Konni",
      ],
    },
    {
      name: "Pathanamthitta",
      cities: [
        "Pathanamthitta",
        "Tiruvalla",
        "Adoor",
        "Konni",
        "Ranni",
        "Kozhencherry",
      ],
    },
    {
      name: "Alappuzha",
      cities: [
        "Alappuzha",
        "Chengannur",
        "Kayamkulam",
        "Mavelikkara",
        "Harippad",
      ],
    },
    {
      name: "Kottayam",
      cities: ["Kottayam", "Pala", "Changanassery", "Vaikom", "Kanjirappally"],
    },
    {
      name: "Idukki",
      cities: ["Thodupuzha", "Idukki", "Munnar", "Adimali", "Nedumkandam"],
    },
    {
      name: "Ernakulam",
      cities: [
        "Kochi",
        "Kothamangalam",
        "Perumbavoor",
        "Aluva",
        "Angamaly",
        "North Paravur",
        "Thrikkakara",
        "Kalamassery",
      ],
    },
    {
      name: "Thrissur",
      cities: [
        "Thrissur",
        "Chalakudy",
        "Kodungallur",
        "Kunnamkulam",
        "Guruvayur",
        "Irinjalakuda",
      ],
    },
    {
      name: "Palakkad",
      cities: [
        "Palakkad",
        "Ottapalam",
        "Pattambi",
        "Chittur-Thathamangalam",
        "Mannarkkad",
        "Shoranur",
      ],
    },
    {
      name: "Malappuram",
      cities: [
        "Malappuram",
        "Manjeri",
        "Tirur",
        "Perinthalmanna",
        "Ponnani",
        "Nilambur",
      ],
    },
    {
      name: "Kozhikode",
      cities: [
        "Kozhikode",
        "Vatakara",
        "Perambra",
        "Kunnamangalam",
        "Ramanattukara",
      ],
    },
    {
      name: "Wayanad",
      cities: ["Kalpetta", "Mananthavady", "Sulthan Bathery"],
    },
    {
      name: "Kannur",
      cities: ["Kannur", "Thalassery", "Mattannur", "Iritty", "Payyannur"],
    },
    {
      name: "Kasaragod",
      cities: ["Kasaragod", "Kanhangad", "Manjeshwaram"],
    },
  ],
};
export default data;
