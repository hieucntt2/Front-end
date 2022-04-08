const listItem = [
    {
        id: 1,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '8.999.000'
    },
    {
        id: 2,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '3.999.000'
    },
    {
        id: 3,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '1.999.000'
    },
    {
        id: 4,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '7.999.000'
    },
    {
        id: 5,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '9.999.000'
    },
    {
        id: 6,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '18.999.000'
    },
    {
        id: 7,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '28.999.000'
    },
    {
        id: 8,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '38.999.000'
    },
    {
        id: 9,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '4.999.000'
    },
    {
        id: 10,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '14.999.000'
    },
    {
        id: 11,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '5.999.000'
    },
    {
        id: 12,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '11.999.000'
    },
    {
        id: 13,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '1.999.000'
    },
    {
        id: 14,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/giuong-ngu.png',
        desc: 'Size vưuaf, trắng sữa',
        price: '9.999.000'
    },
]

let pagination = {
    pageNumber: 1,
    pageSize: 12
}

function setListItem(list) {
    $('.product__list').html(''); //thiết lập class news về rỗng
    for (let i = 0; i < list.length; i++) {
        let item = ` <div class="col-md-3 product__item">
        <div class="product__item__img">
            <a href="#">
                <img src="${list[i].image}">
            </a>
        </div>
        <a href="#">${list[i].name}</a>
        <div class="product__item__icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <span>(${list[i].desc})</span>
        <p>${list[i].price} VNĐ</p>
    </div> `

        $('.product__list').append(item);
    }
}
setListItem(listItem.slice(0, pagination.pageSize));

$('.product__pagination ul li').click(function () {
    $('.product__pagination ul li').removeClass('active');
    $(this).addClass('active');

    let page = $(this).attr('page-number');
    pagination.pageNumber = parseInt(page);

    let arr = listItem.slice(pagination.pageNumber * pagination.pageSize - pagination.pageSize, pagination.pageSize * pagination.pageNumber)

    setListItem(arr);
})

//Tìm kiếm theo giá sản phẩm
$('.classify ul li').click(function () {
    let value = $(this).attr('value');
    let minPrice = 0;
    let maxPrice = 0;
    if (value == 1) {
        minPrice = 0;
        maxPrice = 5;
    }
    if (value == 2) {
        minPrice = 5;
        maxPrice = 10;
    }
    if (value == 3) {
        minPrice = 10;
        maxPrice = 15;
    }
    if (value == 4) {
        minPrice = 15;
        maxPrice = Infinity;
    }
    let arr = [];
    for (let i = 0; i < listItem.length; i++) {
        if (minPrice <= parseInt(listItem[i].price) && (parseInt(listItem[i].price) < maxPrice)) {
            arr.push(listItem[i]);
            console.log(listItem[i]);
        }
    }
    setListItem(arr);
})