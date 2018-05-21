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
        productName:'Dr. Aquaguard Magna NXT HD RO',
        productCategory:'Water Purifier',
        problemCategory:'Installation',
        priority:'High',
        status:'new',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/1/_/1_2.jpg',
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
        sno:2,
        date:'12/04/2018',
        productName:'Euro Health Clean',
        productCategory:'Vaccum Cleaner',
        problemCategory:'Installation',
        priority:'Low',
        status:'re-open',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/s/c/scpr300.jpg',
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
        sno:3,
        date:'12/04/2018',
        productName:'Dr. Aeroguard SCPR 300',
        productCategory:'Security Solutions',
        problemCategory:'Installation',
        priority:'High',
        status:'new',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTpSo_YJ46Qb7nGdH88YXc8M5HCNUo7fv-nrAhhsJjCVvY0Xuvr_GPKybVvBA&usqp=CAc ',
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
        sno:4,
        date:'12/04/2018',
        productName:'Eurovigil I Deter 100 ',
        productCategory:'Health Conditioners',
        problemCategory:'Installation',
        priority:'Medium',
        status:'assigned',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/5/s/5s-1.jpg',
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
        sno:5,
        date:'12/04/2018',
        productName:'5 Star Inverter Split AC – 1.00 T',
        productCategory:'Water Purifiers',
        problemCategory:'Installation',
        priority:'High',
        status:'scheduled',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/5/s/5s-1.jpg',
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
        productName:'Aquaguard On The Go Avengers Series Thor',
        productCategory:'Water Purifiers',
        problemCategory:'Installation',
        priority:'High',
        status:'fixed',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/3/2/320x400_thor.png',
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
        fixedImages:[
          'https://images-na.ssl-images-amazon.com/images/I/51NxHMWdjHL.jpg',
          'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/f/efl_aquaguardonthego_l_200500_4.jpg',
          'https://5.imimg.com/data5/FI/HK/MY-36230693/aquaguard-on-the-go-avengers-series-thor-500x500.jpg'
        ],

        notFixedDate:'19/9/2018',
        notFixedTime:'1:00 PM',
        notFixedAddress:'123-B, Block M, Sector 42, New Delhi, Delhi INDIA',
        notFixedImages:[
          'data:image/jpeg;base64,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',
          'https://4.imimg.com/data4/CR/PD/IMOB-43928679/img-20161205-wa0016-500x500.jpg',
          'https://4.imimg.com/data4/CF/XJ/ANDROID-40619014/product-250x250.jpeg'
        ]
      },
      {
        sno:7,
        date:'12/04/2018',
        productName:'Aquaguard Enhance Green RO',
        productCategory:'Water Purifiers',
        problemCategory:'Installation',
        priority:'Low',
        status:'not-fixed',
        description:'lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh lorem ipsum asjsdh ',

        productImage:'https://cdn-live-wwf0uvrcwyr9hig.stackpathdns.com/media/catalog/product/cache/1/small_image/230x210/0dc2d03fe217f8c83829496872af24a0/e/u/eureka_forbes-wp-8664-min.jpg',
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

    ]
  }
}
