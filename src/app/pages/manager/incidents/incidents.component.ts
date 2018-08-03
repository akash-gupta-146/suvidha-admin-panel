import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})


export class IncidentsComponent implements OnInit {
  incidents:any[];
  modalTitle:string;

  constructor() { }

  assign(){
    $('#actionModal').modal();
    this.modalTitle = 'Assign';
  }
  
  ngOnInit() {
    this.incidents = [
      {
        sno:1,
        date:'12/04/2018',
        productName:'Serie | 2 60cm built-in Stainless steel Oven',
        productCategory:'Cooking & Baking',
        problemCategory:'Installation',
        priority:'High',
        status:'new',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://media3.bosch-home.com/Product_Shots/600x600/MCSA00925523_556431_HBN551E1T_def.jpg',
        productPurchaseDate: '1/01/2018',
        mrp:'Rs. 12,000',
        productRegNo:'1234567890',

        customerName:'Mrs. Anshika Oberoi',
        customerImage:'https://i.pinimg.com/originals/c7/a3/e4/c7a3e4987aa47256277894e7f1b30baa.jpg',
        customerPhone: '+91 9876765455',
        customerEmail: 'anshikaoberoi@gmail.com',
        customerAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        dealerName:'Lotus Electronics',
        dealerImage:'https://www.lotuselectronics.com/front/img/logo.png',
        dealerPhone:'09289876562',
        dealerEmail:'shop504delhi@lotus.com',
        dealerAddress:'Shop no.504-505, Guru Ram Das Nagar, Laxmi Nagar, Delhi 110092',

        engineerName:'Rahul Verma',
        engineerImage:'https://www.afloridacalibration.com/s/cc_images/teaserbox_14568086.jpg?t=1482870843',
        engineerPhone:'099111 02855',
        engineerEmail:'rahul9087@lotuselectronics.com',

        scheduleDate:'19/9/2018',
        csheduleTime:'12:30 PM',
        scheduleAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        fixedDate:'19/9/2018',
        fixedTime:'1:00 PM',
        fixedSignature:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg/1280px-Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg.png',
        fixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        fixedComment:'Wall was already spoiled',
        fixedImages:[
          'http://www.severin.com/sites/default/files/productimages/mw7868_drehteller.jpg'
        ],

        notFixedDate:'19/9/2018',
        notFixedTime:'1:00 PM',
        notFixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        notFixedImages:[
          '',
          '',
          ''
        ]
      },
      {
        sno:2,
        date:'12/04/2018',
        productName:'Serie | 6  46 cm MW appliance with grill',
        productCategory:'Microwave Oven',
        problemCategory:'Installation',
        priority:'Low',
        status:'re-open',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://media3.bosch-home.com/Product_Shots/600x600/MCSA00722358_E4052_HMT84G654W_375589_def.jpg',
        productPurchaseDate: '1/01/2018',
        mrp:'Rs. 12,000',
        productRegNo:'1234567890',

        customerName:'Mr. Yash Jadhav',
        customerImage:'https://www.surrogatefinder.com/Photo/surrogates_9d66371fdae3f2e85d4369d7168ad43e.jpg',
        customerPhone: '+91 9876765455',
        customerEmail: 'yashJadahv@gmail.com',
        customerAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        dealerName:'Lotus Electronics',
        dealerImage:'https://www.lotuselectronics.com/front/img/logo.png',
        dealerPhone:'09289876562',
        dealerEmail:'shop504delhi@lotus.com',
        dealerAddress:'Shop no.504-505, Guru Ram Das Nagar, Laxmi Nagar, Delhi 110092',

        engineerName:'Rahul Verma',
        engineerImage:'https://www.afloridacalibration.com/s/cc_images/teaserbox_14568086.jpg?t=1482870843',
        engineerPhone:'099111 02855',
        engineerEmail:'rahul9087@lotuselectronics.com',

        scheduleDate:'19/9/2018',
        csheduleTime:'12:30 PM',
        scheduleAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        fixedDate:'19/9/2018',
        fixedTime:'1:00 PM',
        fixedSignature:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg/1280px-Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg.png',
        fixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        fixedComment:'Wall was already spoiled',
        fixedImages:['https://asset.conrad.com/media10/isa/160267/c1/-/global/1548348_BB_00_LO/image.jpg?x=1000&y=1000&ex=1000&ey=1000&align=center',
        'https://preisvergleich.check24.de/content/bilder/kochgeraete/severin-mw-7862/severin-mw-7862.jpg',
        'https://p1.akcdn.net/full/232516635.mora-mt-121-s.jpg'
        ],

        notFixedDate:'19/9/2018',
        notFixedTime:'1:00 PM',
        notFixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        notFixedImages:[
          '',
          '',
          ''
        ]
      },
      {
        sno:3,
        date:'12/04/2018',
        productName:'Serie | 4  90 cm Island Glass Hood',
        productCategory:'Security Solutions',
        problemCategory:'Installation',
        priority:'High',
        status:'new',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://media3.bosch-home.com/Product_Shots/600x600/MCSA01859890_DIG098G50I_ChimneyHood_Bosch_STP_def.jpg',
        productPurchaseDate: '1/01/2018',
        mrp:'Rs. 12,000',
        productRegNo:'1234567890',

        customerName:'Mrs. Anushka Kohli',
        customerImage:'https://newsnation1.s3.amazonaws.com/images/2014/04/30/322781093-AnushkaSharma_6.jpg',
        customerPhone: '+91 9876765455',
        customerEmail: 'ansusshakkholi@gmail.com',
        customerAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        dealerName:'Lotus Electronics',
        dealerImage:'https://www.lotuselectronics.com/front/img/logo.png',
        dealerPhone:'09289876562',
        dealerEmail:'shop504delhi@lotus.com',
        dealerAddress:'Shop no.504-505, Guru Ram Das Nagar, Laxmi Nagar, Delhi 110092',

        engineerName:'Rahul Verma',
        engineerImage:'https://www.afloridacalibration.com/s/cc_images/teaserbox_14568086.jpg?t=1482870843',
        engineerPhone:'099111 02855',
        engineerEmail:'rahul9087@lotuselectronics.com',

        scheduleDate:'19/9/2018',
        csheduleTime:'12:30 PM',
        scheduleAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        fixedDate:'19/9/2018',
        fixedTime:'1:00 PM',
        fixedSignature:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg/1280px-Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg.png',
        fixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        fixedComment:'Wall was already spoiled',
        fixedImages:['http://www.kitchenappliances123.co.uk/shop/pc/catalog/cda_ecpk90ss_1122_detail.jpg','https://brain-images-ssl.cdn.dixons.com/6/5/10162456/u_10162456.jpg','https://images-na.ssl-images-amazon.com/images/I/61CsH3W092L._SX342_.jpg'],

        notFixedDate:'19/9/2018',
        notFixedTime:'1:00 PM',
        notFixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        notFixedImages:[
          '',
          '',
          ''
        ]
      },
      {
        sno:4,
        date:'12/04/2018',
        productName:'Serie | 4  60 cm Induction Ceramic Hob',
        productCategory:'Hobs',
        problemCategory:'Installation',
        priority:'Medium',
        status:'assigned',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://media3.bosch-home.com/Product_Shots/600x600/MCSA01025503_647637_PIE651BB1E_def.jpg',
        productPurchaseDate: '1/01/2018',
        mrp:'Rs. 12,000',
        productRegNo:'1234567890',

        customerName:'Mr Sehvag Tendulkar',
        customerImage:'http://static.businessworld.in/article/article_extra_large_image/1484156828_BwUup4_S1.jpg',
        customerPhone: '+91 9876765455',
        customerEmail: 'stendulkar@gmail.com',
        customerAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        dealerName:'Lotus Electronics',
        dealerImage:'https://www.lotuselectronics.com/front/img/logo.png',
        dealerPhone:'09289876562',
        dealerEmail:'shop504delhi@lotus.com',
        dealerAddress:'Shop no.504-505, Guru Ram Das Nagar, Laxmi Nagar, Delhi 110092',

        engineerName:'Rahul Verma',
        engineerImage:'https://www.afloridacalibration.com/s/cc_images/teaserbox_14568086.jpg?t=1482870843',
        engineerPhone:'099111 02855',
        engineerEmail:'rahul9087@lotuselectronics.com',

        scheduleDate:'19/9/2018',
        csheduleTime:'12:30 PM',
        scheduleAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        fixedDate:'19/9/2018',
        fixedTime:'1:00 PM',
        fixedSignature:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg/1280px-Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg.png',
        fixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        fixedComment:'Wall was already spoiled',
        fixedImages:[
          'http://www.berlinbuy.com/content/images/thumbs/0009550_series-4-60-cm-induction-hob-glass-ceramic.jpeg'
        ],

        notFixedDate:'19/9/2018',
        notFixedTime:'1:00 PM',
        notFixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        notFixedImages:[
          '',
          '',
          ''
        ]
      },
      {
        sno:5,
        date:'12/04/2018',
        productName:'TAT3A014 red',
        productCategory:'Breakfast and beverages',
        problemCategory:'Installation',
        priority:'High',
        status:'scheduled',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://media3.bosch-home.com/Product_Shots/600x600/MCSA00474777_D4134_TAT3A014_98687_def.jpg',
        productPurchaseDate: '1/01/2018',
        mrp:'Rs. 12,000',
        productRegNo:'1234567890',

        customerName:'Avantika Sain',
        customerImage:'http://1.bp.blogspot.com/-hRtlToYgZPw/VmHWLtCOF6I/AAAAAAAAEO8/hTGYqKkah5Q/s1600/10.jpg',
        customerPhone: '+91 9876765455',
        customerEmail: 'avantikasain@gmail.com',
        customerAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        dealerName:'Lotus Electronics',
        dealerImage:'https://www.lotuselectronics.com/front/img/logo.png',
        dealerPhone:'09289876562',
        dealerEmail:'shop504delhi@lotus.com',
        dealerAddress:'Shop no.504-505, Guru Ram Das Nagar, Laxmi Nagar, Delhi 110092',

        engineerName:'Rahul Verma',
        engineerImage:'https://www.afloridacalibration.com/s/cc_images/teaserbox_14568086.jpg?t=1482870843',
        engineerPhone:'099111 02855',
        engineerEmail:'rahul9087@lotuselectronics.com',

        scheduleDate:'19/9/2018',
        csheduleTime:'12:30 PM',
        scheduleAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        fixedDate:'19/9/2018',
        fixedTime:'1:00 PM',
        fixedSignature:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg/1280px-Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg.png',
        fixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        fixedComment:'Wall was already spoiled',
        fixedImages:[
          'http://www.lg.com/us/images/tvs/md05802269/gallery/medium01.jpg',
          'http://www.220-electronics.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-ps-50c450-plasma-multi-system-tv.jpg',
          'https://images.philips.com/is/image/PhilipsConsumer/42PFL6357_V7-IMS-en_IN?$jpglarge$&wid=1250'
        ],

        notFixedDate:'19/9/2018',
        notFixedTime:'1:00 PM',
        notFixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        notFixedImages:[
          '',
          '',
          ''
        ]
      },
      {
        sno:6,
        date:'12/04/2018',
        productName:'Hand blender set',
        productCategory:'Kitchen Appliance',
        problemCategory:'Installation',
        priority:'High',
        status:'fixed',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://media3.bosch-home.com/Product_Shots/600x600/MCSA00726979_E4593_MSM67190_378570_korr_def.jpg',
        productPurchaseDate: '1/01/2018',
        mrp:'Rs. 12,000',
        productRegNo:'1234567890',

        customerName:'Yash Chandra',
        customerImage:'https://media.indiatimes.in/media/content/2016/Apr/stalker-jitender-singh_650x400_1461998027.jpg',
        customerPhone: '+91 9876765455',
        customerEmail: 'yashchandra@gmail.com',
        customerAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        dealerName:'Lotus Electronics',
        dealerImage:'https://www.lotuselectronics.com/front/img/logo.png',
        dealerPhone:'09289876562',
        dealerEmail:'shop504delhi@lotus.com',
        dealerAddress:'Shop no.504-505, Guru Ram Das Nagar, Laxmi Nagar, Delhi 110092',

        engineerName:'Rahul Verma',
        engineerImage:'https://www.afloridacalibration.com/s/cc_images/teaserbox_14568086.jpg?t=1482870843',
        engineerPhone:'099111 02855',
        engineerEmail:'rahul9087@lotuselectronics.com',

        scheduleDate:'19/9/2018',
        csheduleTime:'12:30 PM',
        scheduleAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        fixedDate:'19/9/2018',
        fixedTime:'1:00 PM',
        fixedSignature:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg/1280px-Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg.png',
        fixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        fixedComment:'Wall was already spoiled',
        fixedImages:['https://media3.bosch-home.com/Product_Shots/1800x1012/MCSA00923060_BO_U_14_UB7_other_MSM67110_picture_KF5_softtouch_ENG_201114_def.jpg',
        'https://media3.bosch-home.com/Product_Shots/1800x1012/MCSA00788738_E1069_MSM8_Titel_800_mitKabel_klAnschl_def.jpg'
        ],

        notFixedDate:'19/9/2018',
        notFixedTime:'1:00 PM',
        notFixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        notFixedImages:['https://media3.bosch-home.com/Product_Shots/1800x1012/MCSA00923060_BO_U_14_UB7_other_MSM67110_picture_KF5_softtouch_ENG_201114_def.jpg',
        'https://media3.bosch-home.com/Product_Shots/1800x1012/MCSA00788738_E1069_MSM8_Titel_800_mitKabel_klAnschl_def.jpg'
        ]
      },
      {
        sno:7,
        date:'12/04/2018',
        productName:'Serie | 6 VarioInverter',
        productCategory:'Refrigerator',
        problemCategory:'Installation',
        priority:'Low',
        status:'not-fixed',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://media3.bosch-home.com/Product_Shots/600x600/MCSA00854995_F4541_KDN46XI30I_490474_def.jpg',
        productPurchaseDate: '1/01/2018',
        mrp:'Rs. 12,000',
        productRegNo:'1234567890',

        customerName:'Bhagyashree Dutta',
        customerImage:'http://media2.bollywoodhungama.in/wp-content/uploads/2017/02/Bhagyashree-booked-in-a-hit-and-run-case.jpg',
        customerPhone: '+91 9876765455',
        customerEmail: 'bhagyadutt@gmail.com',
        customerAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        dealerName:'Lotus Electronics',
        dealerImage:'https://www.lotuselectronics.com/front/img/logo.png',
        dealerPhone:'09289876562',
        dealerEmail:'shop504delhi@lotus.com',
        dealerAddress:'Shop no.504-505, Guru Ram Das Nagar, Laxmi Nagar, Delhi 110092',

        engineerName:'Rahul Verma',
        engineerImage:'https://www.afloridacalibration.com/s/cc_images/teaserbox_14568086.jpg?t=1482870843',
        engineerPhone:'099111 02855',
        engineerEmail:'rahul9087@lotuselectronics.com',

        scheduleDate:'19/9/2018',
        csheduleTime:'12:30 PM',
        scheduleAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',

        fixedDate:'19/9/2018',
        fixedTime:'1:00 PM',
        fixedSignature:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg/1280px-Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg.png',
        fixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        fixedComment:'Wall was already spoiled',
        fixedImages:['https://media3.bosch-home.com/Product_Shots/1800x1012/MCSA01659021_KDN46XI30I_PGA3_def.jpg','https://media3.bosch-home.com/Product_Shots/4000x4000/MCSA00452960_D2497_KDN56AI22_78474_def.jpg','https://media3.bosch-home.com/Product_Shots/4000x4000/MCSA01659023_KDN46XI30I_PGA4_def.jpg'
        ],

        notFixedDate:'19/9/2018',
        notFixedTime:'1:00 PM',
        notFixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        notFixedImages:[
          '',
          '',
          ''
        ]
      },

    ]
  }
}
