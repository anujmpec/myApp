var app = angular.module('hoss_app.services', []);
app.factory('imageCapt', function($q, $cordovaCamera) {
    var image_url = "";
    var _ChoosePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
                    return $cordovaCamera.getPicture(options).then(function (imageData) {
                        image_url = "data:image/jpeg;base64," + imageData;
                        return image_url;
                    }, function (err) {
                        alert(err);
                        // An error occured. Show a message to the user
                    });
                }; 
    var _GetImageUrl= function(){
          var options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: true
                };
   
                    return $cordovaCamera.getPicture(options).then(function (imageData) {
                        image_url ="data:image/jpeg;base64,"+ imageData;                 
                    return image_url;
                    }, function (err) {
                        alert(err);
                    });
    };
    return {
        GetImageUrl : _GetImageUrl,
        ChoosePhoto : _ChoosePhoto,
    };
      
});
app.filter('spaceless',function() {
    return function(input) {
        if (input) {
            return input.replace(/\s+/g, '_');    
        }
    }
});
app.factory('Cates', function($http,$ionicLoading) {
  return {
    all: function() {
      return $http({     
           crossDomain: true,
            method: 'GET',
            dataType: 'jsonp',
            url: 'https://jq55k0ahvf.execute-api.us-east-1.amazonaws.com/dev/category'
        }).then(function(response){ 
        	console.log(response);
        return response.data;
      },
       function(data) {
        return data;
        $ionicLoading.show({ template: 'Some issue !', noBackdrop: true, duration: 2000 });
    });
    }
  };
});
app.factory('allProduct', function($http,$ionicLoading) {
	console.log("in all Product service");
 return {
    productList: function() {
    	return $http({     
            crossDomain: true,
            method: 'GET',
            dataType: 'jsonp',
            url: 'https://jq55k0ahvf.execute-api.us-east-1.amazonaws.com/dev/card'
        }).then(function(response){ 
        	console.log(response);
       	return response.data;
      },
       function(data) {
       	console.log(data);
        return data;
        $ionicLoading.show({ template: 'Some issue !', noBackdrop: true, duration: 2000 });
    });
    }
  };
});

app.factory('Cates2', function($http) {

	 //  return {
  //   myPermission: function(type,o_id) {
  //     return $http({     
  //           crossDomain: true,
  //           method: 'GET',
  //           dataType: 'jsonp',
  //           url: Baseurl+'/api/Privilege?UserId='+o_id+'&ModuleName='+type
  //       }).then(function(response){ 
  //       return response;
  //     },
  //      function(data) {
  //       return data;
  //       $ionicLoading.show({ template: 'Some issue !', noBackdrop: true, duration: 2000 });
  //   });

    
  //   }
  // };
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cates = [{
    id: 0,
	class: 'item-1',
	img: 'img/category/birthday.jpg',
    name: 'Birthday',
    lastText: 'Keep Smile.It is your Birthday'
  }, {
    id: 6,
	class: 'item-6',
	img: 'img/category/anniversary.jpg',
    name: 'Anniversary',
    lastText: 'Two hearts with long life.'
  }, 

  {
    id: 1,
	class: 'item-2',
	img: 'img/category/easter.png',
    name: 'Easter',
    lastText: 'Smile it is Easter.'
  }, {
    id: 2,
	class: 'item-3',
	img: 'img/category/special.jpg',
    name: 'Special Days',
    lastText: 'Time to Enjoy Special Day'
  }, {
    id: 3,
	class: 'item-4',
	img: 'img/category/4.jpg',
    name: 'Get Well Soon',
    lastText: 'Never Give Up.Stand Up soon'
  }, {
    id: 4,
	class: 'item-5',
	img: 'img/category/congrtz.png',
    name: 'Congratulation',
    lastText: 'Yeeh!!! You did this.'
  }];

  return {
    all: function() {
    	$http({     
            crossDomain: true,
            method: 'GET',
            dataType: 'jsonp',
            url: 'https://jq55k0ahvf.execute-api.us-east-1.amazonaws.com/dev/category'
        }).then(function(response){ 
        	console.log(response);
        	return response;
      },
       function(data) {
       	console.log(data);
        return data;
        $ionicLoading.show({ template: 'Some issue !', noBackdrop: true, duration: 2000 });
    });
      //return cates;
    },
    get: function(cateId) {
      for (var i = 0; i < cates.length; i++) {
        if (cates[i].id === parseInt(cateId)) {
          return cates[i];
        }
      }
      return null;
    }
  };
});

app.service('Products', function() {
	var products = [{
		id: 0,
        cateId: 0,
		img: 'img/product/thumb1.jpg',
		imgLg: 'img/product/1.jpg',
		name: 'TEA WITH SAMOSA CHAT',
		price: 'Rs.40.00',
		details : 'One of the best parts about winters is fresh, sweet green peas flooding the markets. And there is no better way to have them than in matar samosas. The Matar Samosa Chaat Recipe is one of the best chaat recipes that you can make at home. The spicy peas filling along with the flaky and crisp samosa crust drizzled with sweet and sour tamarind chutney and topped with onions and sev is a combination nobody can resist!',
		like: '2145'
	  }, {
		id: 1,
        cateId: 0,
		img: 'img/product/thumb2.jpg',
        imgLg: 'img/product/2.jpg',
		name: 'MASALA TEA',
		price: 'Rs.35.00',
		details :' This is a flavoured tea beverage made by brewing black tea with a mixture of aromatic Indian spices and herbs. Originating in India,the beverage has gained worldwide popularity, becoming a feature in many coffee and tea houses. Although traditionally prepared by a decoction of green cardamom pods, cinnamon sticks, ground cloves, ground ginger, and black peppercorn together with black tea leaves, retail versions include tea bags for infusion, instant powdered mixtures, and concentrates.',
		like: '738'
	  }, {
		id: 2,
        cateId: 0,
		img: 'img/product/thumb3.jpg',
        imgLg: 'img/product/3.jpg',
		name: 'VEG SANDWHICH',
		price: 'Rs. 25.00',
		details :'Vegetable sandwich is the most common type of sandwich in India[citation needed]. It is a purely vegetarian item (though not vegan if butter is used), and is often seen prepared and served fresh by roadside vendors as well as in many restaurants.It consists of vegetable filling between two slices of white bread. The most commonly used vegetables for this sandwich are the tomato, the cucumber and the potato. Other vegetables used include beetroot and onion.',
		like: '1029'
	  }, {
		id: 3,
        cateId: 0,
		img: 'img/product/thumb4.jpg',
        imgLg: 'img/product/4.jpg',
		name: 'RAVA PONGAL',
		details : 'Pongal is a simple South Indian Breakfast recipe similar to Ven pongal, the only difference is rava is used instead of rice. Even bachelors out there, can try Rava Pongal is a simple South Indian Breakfast recipe similar to Ven pongal, the only difference is rava is used instead of rice.Rava pongal is made with sooji (Semolina) and moong dal, cooked with pepper, jeera, ginger and green chilli.',
		price: 'Rs. 47.00',
		like: '802'
	  }, {
		id: 4,
        cateId: 0,
		img: 'img/product/thumb5.jpg',
        imgLg: 'img/product/5.jpg',
		name: 'OATS UTTAPAM',
		price: 'Rs. 100.00',
		details : 'Uttapam is a thick pancake made with fermented batter usually made of lentil and rice.',
		like: '218'
	  }, {
		id: 5,
        cateId: 0,
		img: 'img/product/jalebi_thumb.jpg',
        imgLg: 'img/product/jalebi.jpg',
		name: 'CRISPY JALEBI',
		details : 'Ingredients is Maida / Plain Flour ,Rangkat Hydro ,Baking Powder ,Oil / Ghee, Kesar Food Color, Sugar, Cream of tartar, Milk, kesar and nuts ',
		price: 'Rs. 100.00',
		like: '738'
	  }, {
		id: 6,
        cateId: 0,
		img: 'img/product/thumb7.jpg',
        imgLg: 'img/product/7.jpg',
		name: 'OMELETTE ',
		details : 'In cuisine, an omelette or omelet is a dish made from beaten eggs quickly fried with butter or oil in a frying pan (without stirring as in scrambled egg). It is quite common for the omelette to be folded around a filling such as cheese, chives, vegetables, meat (often ham or bacon), or some combination of the above',
		price: 'Rs 25.00',
		like: '1029'
	  }, {
		id: 7,
        cateId: 1,
		img: 'img/product/dal_makhani_thumb.jpg',
        imgLg: 'img/product/dal_makhani.jpg',
		name: 'DAL MAKHANI',
		details : 'Black lentil delicacy prepared with a rich tomato gravy, cream and butter',
		price: 'RS 124.00',
		like: '1029'
	  },  {
		id: 24,
        cateId: 6,
		img: 'img/product/sweet-potato_thumb.jpg',
        imgLg: 'img/product/sweet-potato.jpg',
		name: 'Sweet Potato & Bean Tacos',
		price: 'Rs.200.00',
		details :' Bite into warm corn tortillas filled with a layer of sweet potato and veggie mix, soft and mushy refried beans topped with rich and savoury tomato salsa and sealed with gooey cheese.',
		Ingredients : 'Bean , Sweet potato , Veg',
		like: '738'
	  },  {
		id: 25,
        cateId: 6,
		img: 'img/product/banarasi_aloo_thumb.jpg',
        imgLg: 'img/product/banarasi_aloo.jpg',
		name: 'Banarsi Aloo MealBox',
		price: 'Rs.90.00',
		details :' A unique and creamy recipe. Served with Yellow Dal Tadka, Jeera Rice and 3 Phulkas',
		Ingredients : 'Dal , Rice , Roti',
		like: '738'
	  },  {
		id: 26,
        cateId: 6,
		img: 'img/product/rajma-rice_thumb.jpg',
        imgLg: 'img/product/rajma-rice.jpg',
		name: 'Rajma Rice',
		price: 'Rs.50.00',
		details :' Rajma and rice for heavy dite',
		Ingredients : '',
		like: '78'
	  },  {
		id: 27,
        cateId: 6,
		img: 'img/product/lunch_thali_thumb.png',
        imgLg: 'img/product/lunch_thali.png',
		name: 'Veg Thali',
		price: 'Rs.80.00',
		details :' Thali for lunch is availabe. you will get Rice,4 chapati,dal,sessional sabji,salad',
		Ingredients : 'Rice, Chapati, Dal, Sabji ,Salad',
		like: '78'
	  },  {
		id: 28,
        cateId: 6,
		img: 'img/product/lachha-paratha_thumb.jpg',
        imgLg: 'img/product/lachha-paratha.jpg',
		name: 'Laccha Paratha',
		price: 'Rs.25.00',
		details :' Lachedar Paratha is a popular paratha from North India, made from whole wheat flour.',
		Ingredients : 'wheat flour/ Atta , Ghee ,Salt',
		like: '789'
	  },{
		id: 8,
        cateId: 1,
		img: 'img/product/kadai_paneer_thumb.jpg',
        imgLg: 'img/product/kadai_paneer_thumb.jpg',
		name: 'KADHAI PANEER',
		details : 'Spiced cottage cheese cooked in a tomato-onion gravy with bell peppers',
		price: 'Rs 135.00',
		like: '342'
	  }, {
		id: 9,
        cateId: 1,
		img: 'img/product/malai_kofta_thumb.jpg',
        imgLg: 'img/product/malai_kofta.jpg',
		name: 'MALAI KOFTA',
		details : 'Fried cottage cheese dumplings cooked in a creamy tomato and cashew nut gravy',
		price: 'Rs 139.00',
		like: '480'
	  }, {
		id: 10,
        cateId: 2,
		img: 'img/product/gulab_jamun_thumb.jpg',
        imgLg: 'img/product/gulab_jamun.jpg',
		name: 'GULAB JAMUN',
		details: 'Soft, spongy and melt in mouth gulab jamuns drenched in delicately flavored sugar syrup is a traditional sweet in India',
		Ingredients : 'Khoya , Maida, Baking Soda',
		price: 'Rs 200.00/KG',
		like: '1291'
	  }, {
		id: 11,
        cateId: 2,
		img: 'img/product/Carrot_halwa_thumb.jpg',
        imgLg: 'img/product/Carrot_halwa.jpg',
		name: 'CARROT HALWA',
		details : 'Gajar ka halwa, also known as gajrela, is a sweet dessert pudding associated mainly with the North India.',
		Ingredients :'Carrots, Milk, Water, Ghee, Sugar',
		price: 'Rs 250.00/KG',
		like: '575'
	  }, {
		id: 12,
        cateId: 2,
		img: 'img/product/kaju_thumb.jpg',
        imgLg: 'img/product/kaju.jpg',
		name: 'KAJU KATLI',
		details : 'Kaju katli is an Indian dessert similar to a barfi. he kesar version of this sweet dish is considered to be more exotic and rich',
		Ingredients : 'Cashew Nuts, Sugar, Ghee',
		price: 'Rs 400/500gm',
		like: '583'
	  }, {
		id: 13,
        cateId: 2,
		img: 'img/product/bundi_ladoo_thumb.jpg',
        imgLg: 'img/product/bundi_ladoo.jpg',
		name: 'Bundi Ladoo',
		details: 'Laddu Bundi are most liked. Any prayers or offerings or any happy occasion Bundi builder (Bundi Ladoo) are made of course.',
		Ingredients : 'Flour , Sugar ,Small cardamom, Pistachios,Melon seeds, Oil ,Ghee ',
		price: 'Rs 420.00/KG',
		like: '120'
	  }, {
		id: 14,
        cateId: 2,
		img: 'img/product/soan_papdi_thumb.jpg',
        imgLg: 'img/product/soan_papdi.jpg',
		name: 'Sohan papdi',
		details : 'Sohan papdi is a popular North Indian dessert. It is usually cube-shaped or served as flakes, and has a crisp and flaky texture',
		Ingredients: 'Gram flour, sugar, flour, ghee, milk, cardamom',
		price: 'Rs 220.00/KG',
		like: '203'
	  }, {
		id: 15,
        cateId: 3,
		img: 'img/product/thumb16.jpg',
        imgLg: 'img/product/16.jpg',
		name: 'Espresso Coffee ',
		details: 'Espresso is coffee brewed by forcing a small amount of nearly boiling water under pressure through finely ground coffee beans.',
		Ingredients:'Coffee Powder ,Granulated Sugar, Milk, Water, Cocoa Powder',
		price: 'Rs 120.00/Cup',
		like: '163'
	  }, {
		id: 16,
        cateId: 3,
		img: 'img/product/thumb17.jpg',
        imgLg: 'img/product/17.jpg',
		name: 'Espresso Coffee ',
		details: 'Espresso is coffee brewed by forcing a small amount of nearly boiling water under pressure through finely ground coffee beans.',
		Ingredients:'Coffee Powder ,Granulated Sugar, Milk, Water, Cocoa Powder',
		price: 'Rs 120.00/Cup',
		like: '5200'
	  }, {
		id: 17,
        cateId: 3,
		img: 'img/product/thumb18.jpg',
        imgLg: 'img/product/18.jpg',
		name: 'Iced Espresso Coffee',
		price: '$23.00',
		like: '232'
	  }, {
		id: 18,
        cateId: 3,
		img: 'img/product/thumb19.jpg',
        imgLg: 'img/product/19.jpg',
		name: 'Con Zucchero Coffee',
		price: '$20.00',
		like: '2323'
	  }, {
		id: 19,
        cateId: 3,
		img: 'img/product/thumb20.jpg',
        imgLg: 'img/product/20.jpg',
		name: 'Macchiato Coffee',
		price: '$26.00',
		like: '546'
	  }, {
		id: 20,
        cateId: 4,
		img: 'img/product/thumb21.jpg',
        imgLg: 'img/product/21.jpg',
		name: 'Beach Burn Cocktail',
		price: '$30.00',
		like: '964'
	  }, {
		id: 21,
        cateId: 4,
		img: 'img/product/thumb22.jpg',
        imgLg: 'img/product/22.jpg',
		name: 'Pink Cocktail - Cranberry Vodka Spritzer',
		price: '$12.00',
		like: '340'
	  }, {
		id: 22,
        cateId: 4,
		img: 'img/product/thumb23.jpg',
        imgLg: 'img/product/23.jpg',
		name: 'Zydeco Fiddle Cocktail',
		price: '$23.00',
		like: '332'
	  }, {
		id: 23,
        cateId: 4,
		img: 'img/product/thumb24.jpg',
        imgLg: 'img/product/24.jpg',
		name: 'Fever Pitch Cocktail',
		price: '$30.00',
		like: '492'
	  }];

	  return {
		all: function() {
		  return products;
		},
		get: function(productId) {
		  for (var i = 0; i < products.length; i++) {
			if (products[i].id === parseInt(productId)) {
			  return products[i];
			}
		  }
		  return null;
		},
		getByCate: function(cateId) {
          var product_cate = [];
		  for (var i = 0; i < products.length; i++) {
			if (products[i].cateId === parseInt(cateId)) {
                product_cate.push(products[i]);
			}
		  }
            return product_cate;
		}
	  };
	});
app.service('Carts', function() {
    var carts = [{
        id: 0,
        cateId: 0,
        img: 'img/product/thumb1.jpg',
        imgLg: 'img/product/1.jpg',
        name: 'BEET ROOT AND RED BEAN VEGAN BURGERS',
        price: '$10.00',
        qty: '3'
    }, {
        id: 8,
        cateId: 1,
        img: 'img/product/thumb9.jpg',
        imgLg: 'img/product/9.jpg',
        name: 'CREAMY MUSHROOM SOUP',
        price: '$35.00',
        qty: '4'
    }, {
        id: 13,
        cateId: 2,
        img: 'img/product/thumb14.jpg',
        imgLg: 'img/product/14.jpg',
        name: 'BERRY SMOOTHIE',
        price: '$20.00',
        qty: '2'
    }];

    return {
        all: function() {
            return carts;
        }
    };
});
