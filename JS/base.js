
const product = {
    tea: [
      {
        type: 'tea',
        id: 1,
        name: "Trà sữa Oolong Nướng Trân Châu",
        description: "Hương vị chân ái đúng gu đậm đà với trà oolong được “sao” (nướng) lâu hơn cho hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh, lưu luyến vị trà sữa đậm đà nơi vòm họng.",
        price: 55000,
        img: "./assets/img/tea/tea1.jpeg"
      },
      {
        name: "Hồng Trà Sữa Trân Châu",
        description: "Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.",
        price: 55000,
        img: "./assets/img/tea/tea2.jpeg",
        type: 'tea',
        id: 2
      },
      {
        name: "Trà Sữa Oolong Nướng Nóng",
        description: "Đậm đà chuẩn gu và ấm nóng - bởi lớp trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được \"sao\" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm ấm áp, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.",
        price: 50000,
        img: "./assets/img/tea/tea3.jpeg",
        type: 'tea',
        id: 3
      },
      {
        name: "Trà Long Nhãn Hạt Chia (Nóng)",
        description: "Vị nhãn ngọt, tươi mát đặc trưng hoà quyện tinh tế cùng vị trà oolong hảo hạng và hạt chia mang đến cho bạn một thức uống không chỉ thơm ngon mà còn bổ dưỡng.",
        price: 52000,
        img: "./assets/img/tea/tea4.jpeg",
        type: 'tea',
        id: 4
      },
      {
        name: "Trà Long Nhãn Hạt Chia",
        description: "Vị nhãn ngọt, tươi mát đặc trưng hoà quyện tinh tế cùng vị trà oolong hảo hạng và hạt chia mang đến cho bạn một thức uống không chỉ thơm ngon mà còn bổ dưỡng.",
        price: 45000,
        img: "./assets/img/tea/tea5.jpeg",
        type: 'tea',
        id: 5
      },
      {
        name: "Trà Phúc Bồn Tử",
        description: "Quả Phúc Bồn Tử hoàn toàn tự nhiên, được các barista Nhà kết hợp một cách đầy tinh tế cùng trà Oolong và cam vàng tạo ra một dư vị hoàn toàn tươi mới. Mát lạnh ngay từ ngụm đầu tiên, đọng lại cuối cùng là hương vị trà thơm lừng và vị ngọt thanh, chua dịu khó quên của trái phúc bồn tử.",
        price: 50000,
        img: "./assets/img/tea/tea6.jpeg",
        type: 'tea',
        id: 6
      },
      {
        name: "Hồng Trà Latte Macchiato",
        description: "Sự kết hợp hoàn hảo bởi hồng trà dịu nhẹ và sữa tươi, nhấn nhá thêm lớp macchiato trứ danh của The Coffee House mang đến cho bạn hương vị trà sữa đúng gu tinh tế và healthy.",
        price: 55000,
        img: "./assets/img/tea/tea7.jpeg",
        type: 'tea',
        id: 7
      },
      {
        name: "Trà Đen Macchiato",
        description: "Trà đen được ủ mới mỗi ngày, giữ nguyên được vị chát mạnh mẽ đặc trưng của lá trà, phủ bên trên là lớp Macchiato \"homemade\" bồng bềnh quyến rũ vị phô mai mặn mặn mà béo béo.",
        price: 50000,
        img: "./assets/img/tea/tea8.jpeg",
        type: 'tea',
        id: 8
      },
      {
        name: "Trà Sữa Mắc Ca Trân Châu",
        description: "Mỗi ngày với The Coffee House sẽ là điều tươi mới hơn với sữa hạt mắc ca thơm ngon, bổ dưỡng quyện cùng nền trà oolong cho vị cân bằng, ngọt dịu đi kèm cùng Trân châu trắng giòn dai mang lại cảm giác “đã” trong từng ngụm trà sữa.",
        price: 50000,
        img: "./assets/img/tea/tea9.jpeg",
        type: 'tea',
        id: 9
      },
      {
        name: "Trà Đào Cam Sả - Đá",
        description: "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
        price: 45000,
        img: "./assets/img/tea/tea10.jpeg",
        type: 'tea',
        id: 10
      }
    ],
    coffee: [
      {
        type: 'coffee',
        id: 1,
        name: "Cà Phê Sữa Đá",
        description: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
        price: 32000,
        img: "./assets/img/coffee/coffee1.jpeg"
      },
      {
        type: 'coffee',
        id: 2,
        name: "Bạc Sỉu",
        description: " ",
        price: 32000,
        img: "./assets/img/coffee/coffee2.jpeg"
      },
      {
        type: 'coffee',
        id: 3,
        name: "Caramel Macchiato Đá",
        description: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
        price: 50000,
        img: "./assets/img/coffee/coffee3.jpeg"
      },
      {
        type: 'coffee',
        id: 4,
        name: "Cà Phê Đá Xay-Lạnh",
        description: "Một phiên bản 'upgrade' từ ly cà phê sữa quen thuộc, nhưng lại tỉnh táo và tươi mát hơn bởi lớp đá xay đi kèm. Nhấp 1 ngụm cà phê đá xay là thấy đã, ngụm thứ hai thêm tỉnh táo và cứ thế lôi cuốn bạn đến ngụm cuối cùng. ",
        price: 59000,
        img: "./assets/img/coffee/coffee4.jpeg"
      },
      {
        type: 'coffee',
        id: 5,
        name: "Latte Đá",
        description: "Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan. ",
        price: 50000,
        img: "./assets/img/coffee/coffee5.jpeg"
      },
      {
        type: 'coffee',
        id: 6,
        name: "Cold Brew Sữa Tươi",
        description: "Thanh mát và cân bằng với hương vị cà phê nguyên bản 100% Arabica Cầu Đất cùng sữa tươi thơm béo cho từng ngụm tròn vị, hấp dẫn. ",
        price: 45000,
        img: "./assets/img/coffee/coffee6.jpeg"
      },
      {
        type: 'coffee',
        id: 7,
        name: "Cold Brew Truyền Thống",
        description: "Tại The Coffee House, Cold Brew được ủ và phục vụ mỗi ngày từ 100% hạt Arabica Cầu Đất với hương gỗ thông, hạt dẻ, nốt sô-cô-la đặc trưng, thoang thoảng hương khói nhẹ giúp Cold Brew giữ nguyên vị tươi mới. ",
        price: 45000,
        img: "./assets/img/coffee/coffee7.jpeg"
      },
      {
        type: 'coffee',
        id: 8,
        name: "Cappuccino Đá",
        description: "Capuchino là thức uống hòa quyện giữa hương thơm của sữa, vị béo của bọt kem cùng vị đậm đà từ cà phê Espresso. Tất cả tạo nên một hương vị đặc biệt, một chút nhẹ nhàng, trầm lắng và tinh tế. ",
        price: 50000,
        img: "./assets/img/coffee/coffee8.jpeg"
      }
    ],
  
    cake: [
      {
        type: 'cake',
        id: 1,
        name: "Chà bông phô mai ",
        description: "Chiếc bánh với lớp phô mai vàng sánh mịn bên trong, được bọc ngoài lớp vỏ xốp mềm thơm lừng. Thêm lớp chà bông mằn mặn hấp dẫn bên trên.",
        price: 32000,
        img: "./assets/img/cake/cake1.jpeg"
      }
    ],

    coffeebag : [
      {
        type : 'coffeebag',
        id: 1,
        name: "Thùng 24 Lon Cà Phê Sữa Đá",
        description: "Với thiết kế lon cao trẻ trung, hiện đại và tiện lợi, Cà phê sữa đá lon thơm ngon đậm vị của The Coffee House sẽ đồng hành cùng nhịp sống sôi nổi của tuổi trẻ và giúp bạn có được một ngày làm việc đầy hứng khởi.",
        price: 55000,
        img: "./assets/img/coffeebag/coffeebag1.jpeg"
      },
      {
        type : 'coffeebag',
        id: 2,
        name: "Cà Phê Sữa Đá Hòa Tan",
        description: "Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa, giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
        price: 44000,
        img: "./assets/img/coffeebag/coffeebag2.jpeg"
      },
      {
        type : 'coffeebag',
        id: 3,
        name: "Cà Phê Peak Flavor Hương Thơm Đỉnh Cao (350G)",
        description: "The Coffee House hiểu rằng ly cà phê ngon phải đậm đà, rõ vị từ cái chạm đầu tiên đến hậu vị vương vấn. Cà phê Rich Finish mang đến những ly cà phê đậm, thơm, hương vị tinh tế giúp bạn bắt đầu ngày mới đầy năng lượng.",
        price: 90000,
        img: "./assets/img/coffeebag/coffeebag3.jpeg"
      },
      {
        type : 'coffeebag',
        id: 4,
        name: "Cà Phê Rich Finish Gu Đậm Tinh Tế (350G)",
        description: "Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa, giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
        price: 90000,
        img: "./assets/img/coffeebag/coffeebag4.jpeg"
      }
    ],

    iceblended : [
      {
        type : 'iceblended',
        id: 1,
        name: "Cà Phê Đá Xay-Lạnh ",
        description: "Một phiên bản 'upgrade' từ ly cà phê sữa quen thuộc, nhưng lại tỉnh táo và tươi mát hơn bởi lớp đá xay đi kèm. Nhấp 1 ngụm cà phê đá xay là thấy đã, ngụm thứ hai thêm tỉnh táo và cứ thế lôi cuốn bạn đến ngụm cuối cùng. ",
        price: 59000,
        img: "./assets/img/iceblended/iceblended1.jpeg"
        
      },
      {
        type : 'iceblended',
        id: 2,
        name: "Cookie Đá Xay ",
        description: "Những mẩu bánh cookies giòn rụm kết hợp ăn ý với sữa tươi, kem tươi béo ngọt và đá xay mát lành, đem đến cảm giác lạ miệng gây thích thú và không thể cưỡng lại. Một món uống phá cách dễ thương đầy mê hoặc. ",
        price: 59000,
        img: "./assets/img/iceblended/iceblended2.jpeg"
        
      },
      {
        type : 'iceblended',
        id: 3,
        name: "Sinh Tố Việt Quất ",
        description: "Mứt Việt Quất chua thanh, ngòn ngọt, phối hợp nhịp nhàng với dòng sữa chua bổ dưỡng. Là món sinh tố thơm ngon mà cả đầu lưỡi và làn da đều thích. ",
        price: 59000,
        img: "./assets/img/iceblended/iceblended3.jpeg"
        
      },{
        type : 'iceblended',
        id: 4,
        name: "Chocolate Đá Xay ",
        description: "Sữa và kem tươi béo ngọt được “cá tính hoá” bởi vị chocolate/sô-cô-la đăng đắng. Dành cho các tín đồ hảo ngọt. Lựa chọn hàng đầu nếu bạn đang cần chút năng lượng tinh thần. ",
        price: 59000,
        img: "./assets/img/iceblended/iceblended4.jpeg"
        
      },
      {
        type : 'iceblended',
        id: 5,
        name: "Chanh Sả Đá Xay",
        description: "Sự kết hợp hài hoà giữa Chanh & sả - những nguyên liệu mộc mạc rất đỗi quen thuộc cho ra đời một thức uống thanh mát, vị chua chua ngọt ngọt giải nhiệt lại tốt cho sức khỏe. ",
        price: 49000,
        img: "./assets/img/iceblended/iceblended5.jpeg"
        
      }
    ],
    
    suggestion: [
      {
        type : 'suggestion',
        id: 1,
        name: "Trà sữa Oolong Nướng Trân Châu",
        description: "Hương vị chân ái đúng gu đậm đà với trà oolong được “sao” (nướng) lâu hơn cho hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh, lưu luyến vị trà sữa đậm đà nơi vòm họng.",
        price: 50000,
        img: "./assets/img/tea/tea1.jpeg"
      },
      {
        name: "Hồng Trà Sữa Trân Châu",
        description: "Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.",
        price: 55000,
        img: "./assets/img/tea/tea2.jpeg",
        type : 'suggestion',
        id: 2
      },
      {
        type : 'suggestion',
        id: 3,
        name: "Cà Phê Sữa Đá",
        description: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
        price: 32000,
        img: "./assets/img/coffee/coffee1.jpeg"
      },
      {
        type : 'suggestion',  
        id: 4,
        name: "Chà bông phô mai ",
        description: "Chiếc bánh với lớp phô mai vàng sánh mịn bên trong, được bọc ngoài lớp vỏ xốp mềm thơm lừng. Thêm lớp chà bông mằn mặn hấp dẫn bên trên.",
        price: 32000,
        img: "./assets/img/cake/cake1.jpeg"
      }
    ]
  }

const news = [
  {
    id: 1,
    heading: "THE COFFEE HOUSE CẬP NHẬT TÌNH TRẠNG HOẠT ĐỘNG TRỞ LẠI CỦA CÁC CỬA HÀNG TRÊN TOÀN QUỐC",
    content: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
    img:"./assets/img/news/news1.jpeg"
  },
  {
    id: 2,
    heading: "Hải Phòng Mở Lại - Ưu Đãi Ngập Tràn",
    content: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
    img:"./assets/img/news/news2.jpeg"
  },
  {
    id: 3,
    heading: "SÀI GÒN TRỞ LẠI - NHANH TAY ĐẶT TRƯỚC, RƯỚC QUÀ CỰC COOL",
    content: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
    img:"./assets/img/news/news3.jpeg"
  },
  {
    id: 4,
    heading: "Bắc Ninh Mở Lại, Ưu Đãi Ngập Tràn",
    content: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
    img:"./assets/img/news/news4.jpeg"
  },
  {
    id: 5,
    heading: "Nhà Về Bình Thường Mới, Đà Nẵng Ơi!!!",
    content: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
    img:"./assets/img/news/news5.jpeg"
  },
  {
    id: 6,
    heading: "Tháng Lễ Lớn, Đổi Bean Xịn",
    content: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
    img:"./assets/img/news/news6.jpeg"
  },
  {
    id: 7,
    heading: "Thông Báo: Nhà Về Lại Freeship",
    content: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
    img:"./assets/img/news/news7.jpeg"
  },
  {
    id: 8,
    heading: "MỪNG SINH NHẬT NHÀ 7 TUỔI",
    content: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
    img:"./assets/img/news/news8.jpeg"
  },

]
// start 
function start() {
    renderSuggestion(product.suggestion)
    renderProduct(product.coffeebag)
    renderNews(news);
    renderOrderAdd();
};
start();

function renderSuggestion(products) {
    const suggestionOptions = $('.suggestion__option');
    products.map( (suggestionProduct) => {
        let displayPrice = autoMarkNumber(suggestionProduct.price);
        return suggestionOptions.innerHTML += `
        <div class=" col l-3 m-6 c-12">
             <div class="suggestion-item" id="${suggestionProduct.type}-${suggestionProduct.id}">
                <img src="${suggestionProduct.img}" alt=""  class="suggestion__img">
                <div class="suggestion__info">
                <div class="suggestion__name">
                    ${suggestionProduct.name}
                </div>
                <div class="product__price">
                    ${displayPrice} đ
                    <i class="order__add ti-plus"></i>    
                </div>
            </div> 
        `
    })
  let orderAddElements = $$('.order__add');

}


function renderOrderModal (product) {
    const orderProduct = $('.order-product')
    let displayPrice = autoMarkNumber(product.price);

    return orderProduct.innerHTML = `
      <img src="${product.img}" alt="" class="order-product__img">
        <div class="order-product__info">
          <h3 class="order-product__name">${product.name}</h3>
            <div class="order-product__descr">${product.description}</div>
            <div class="order-product__footer">
                <div class="order-product__price" data-price="${product.price}">${displayPrice} đ</div>
                <div class="order-product__quantity">
                  <i class="ti-minus product__quantity-icon  product__icon-minus"></i>
                  <input type="number" value="1" min="1" class="product__quantity-value">
                  <i class="ti-plus product__quantity-icon  product__icon-plus "></i>
                </div>
            </div>
        </div>
    `
}

function renderProduct (products) {
    const mainProductList = $('.main-product__list');
    mainProductList.innerHTML ="";

    products.map((product) => {
    let displayPrice = autoMarkNumber(product.price);
        return mainProductList.innerHTML += `
        <div  class="col l-2 m-6 c-12">
            <div id="${product.type}-${product.id}" class="product__item">
                <img src="${product.img}" alt="" class="product__item-img">
                <div class="product__info-wrap">
                    <div class="product__item-name limit-line-2">${product.name} </div>
                    <div class="product__price">
                    ${displayPrice} đ
                    <i class="order__add ti-plus"></i> 
                  </div>
                </div>
        </div>
        `
    })
    renderOrderAdd();

}

function renderOrderAdd() {
    orderAddElements = $$('.order__add');
    orderAddElements.forEach( (orderAddElement,index) => {
      orderAddElement.onclick = (e) => {
          let productArray=[];
          const parentSuggestion = orderAddElement.closest('.suggestion-item');
          const parentMain = orderAddElement.closest('.product__item')
          let parent;
    
          if (parentSuggestion)  {
            parent = parentSuggestion
          } else if (parentMain) parent = parentMain;
    
          productArray = parent.id.split('-') 
          renderOrderModal(product[productArray[0]][productArray[1]-1])

          //------------ quantity control-----------
          const toppingPlus = $('.quantity__icon-plus');
          const toppingMinus = $('.quantity__icon-minus');
          const toppingInput =$('.quantity-value');
          const productPlus = $('.product__icon-plus');
          const productMinus = $('.product__icon-minus');
          const productInput =$('.product__quantity-value');
          
          // reset value and minus button
          productInput.value = 1;
          toppingInput.value =0;
          let productValue = productInput.value;
          let toppingValue = toppingInput.value;

          productMinus.classList.remove('active-inline-flex');
          toppingMinus.classList.remove('active-inline-flex');

          // product quantity
          productPlus.onclick =  () => {
            productValue++;
            productInput.value = parseInt(productValue);
            renderPrice();


            if (productValue > 1) productMinus.classList.add('active-inline-flex');
          }
          productMinus.onclick =  () => {
            if (productValue > 1) productValue--;
            productInput.value = parseInt(productValue);
            renderPrice();

            if (productValue ===1 ) productMinus.classList.remove('active-inline-flex');
          }

          // topping quantity
          toppingPlus.onclick =  () => {
            toppingValue++;

            if (toppingValue > 0) {
            toppingMinus.classList.add('active-inline-flex');
            toppingInput.value = parseInt(toppingValue);
            renderPrice();
              
            toppingMinus.onclick =  () => {
              if (toppingValue > 0) toppingValue--;
              toppingInput.value = parseInt(toppingValue);
              renderPrice();
              if (toppingValue === 0 ) toppingMinus.classList.remove('active-inline-flex');
            }
          }
        }

        // size 
        const sizeControl = $$('.size-control');
          // reset checkbox input 
        sizeControl[0].checked = true;
        sizeControl[0]
        sizeControl.forEach( (size) => {
          size.onclick = () => {
            renderPrice();
          }
        })
          renderPrice();
          display($('modal2'));
          body.style.overflow="hidden";
          order.style.animation = 'fadeInOrder 0.4s ease-in'
      }
    })

}


function autoMarkNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// render price
function renderPrice () {
  const total = $('.order-button')
  const productPrice = parseInt($('.order-product__price').getAttribute('data-price'));
  let quantityProduct = parseInt($('.product__quantity-value').value);
  let sizePrice = parseInt($('.size-control:checked').value);
  let toppingQuantity = parseInt($('.quantity-value').value);
  let toppingPrice = toppingQuantity*10000;
  let sum = productPrice*quantityProduct + sizePrice + toppingPrice;
  let displaySum = autoMarkNumber(sum);
  return total.innerHTML = `
    ${displaySum} đ - Thêm vào giỏ hàng
  `
  
}

// category active
const mainProductItem = $$('.main-product__item');
mainProductItem.forEach( (mainProduct,index) => {
    mainProduct.onclick = () => {
        addActive(mainProduct,mainProductItem,index)
        const type = mainProduct.id;
        renderProduct(product[type]);
        renderOrderAdd();
    }
});    


// hide order modal 2
const orderClose = $('.order__icon');
const order = $('.order');
const modal2 = $('modal2');

orderClose.onclick = () => {
  order.style.animation="fadeOutOrder 0.4s";
    setTimeout(() => {
        hide(modal2);
    }, 400);
    body.style.overflow="unset";
}

overlays.forEach( (overlay) => {
  overlay.onclick = (e) => {
    // hide modal 2
    modal2.style.overflow="scroll";
    order.style.animation="fadeOutOrder 0.4s";
      setTimeout(() => {
          hide(modal2);
      }, 400);
      body.style.overflow="unset";

    // hide modal1
    deliveryWrap.style.animation="fadeOut 0.3s ease-in ";
    setTimeout(() => {
        hide(modal1);
    }, 300);
    body.style.overflow="unset";

    // hide modal3
    login.style.animation="fadeOut 0.3s ease-in ";
    setTimeout(() => {
        hide(modal3);
    }, 300);
    body.style.overflow="unset";

  }

})

// active category
const nav2Items = $$('.nav2__item');
nav2Items.forEach( (item,index) => {
  item.onclick = () => {
    addActive(item,nav2Items,index);
  }
})

function renderNews(news) {

    const newsList = $('.news-list');
    for ( let i in news) 
       newsList.innerHTML += `
        <div class="col l-3 m-6 c-12">
          <div class="news-item">
              <img src="${news[i].img}" alt="" class="new__img">
              <div class="news-item__body">
                  <div class="news-item__heading limit-line-2">
                  ${news[i].heading}
                  </div>
                  <div class="news-item__content">
                  ${news[i].content}
                  </div>
                  <div class="news-item__read">
                      ĐỌC TIẾP
                  </div>
              </div>
          </div>
        </div>
      `
 
}

// display modal login
const userLogin = $('.user__option-login');
const loginBtn = $('.login__button');
const modal3 = $('modal3');
const login = $('.login');
const loginSubmit = $('.login__submit');

userLogin.onclick = () => {
  body.style.overflow="hidden";
  login.style.animation = 'fadeInOrder 0.4s ease-in'
  display(modal3)
  hide(userOption);
}

loginBtn.onclick = () => {
  body.style.overflow="hidden";
  login.style.animation = 'fadeInOrder 0.4s ease-in'
  display(modal3)
}

loginSubmit.onclick = () => {
  login.style.animation="fadeOut 0.3s ease-in ";
    setTimeout(() => {
        hide(modal3);
    }, 300);
    body.style.overflow="unset";
}

