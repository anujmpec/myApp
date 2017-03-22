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
app.factory('wishlistUpdate', function($http,$ionicLoading) {
 return {
    addIN: function(st,prId) {
    	var sendData={
  						"userId": "12345",
  						"data": [{"code" : prId, "isActive":""+st+"" }
         ]};  
         console.log("Hello"+JSON.stringify(sendData));    
    	return $http({     
            crossDomain: true,
            method: "POST",
            url: 'https://jq55k0ahvf.execute-api.us-east-1.amazonaws.com/dev/wishlist/12345',
            headers: {'Content-Type': 'application/json'},
            data :sendData
        }).then(function(response){ 
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

//app.factory('Cates2', function($http) {

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
 //  var cates = [{
 //    id: 0,
	// class: 'item-1',
	// img: 'img/category/birthday.jpg',
 //    name: 'Birthday',
 //    lastText: 'Keep Smile.It is your Birthday'
 //  }, {
 //    id: 6,
	// class: 'item-6',
	// img: 'img/category/anniversary.jpg',
 //    name: 'Anniversary',
 //    lastText: 'Two hearts with long life.'
 //  }, 

 //  {
 //    id: 1,
	// class: 'item-2',
	// img: 'img/category/easter.png',
 //    name: 'Easter',
 //    lastText: 'Smile it is Easter.'
 //  }, {
 //    id: 2,
	// class: 'item-3',
	// img: 'img/category/special.jpg',
 //    name: 'Special Days',
 //    lastText: 'Time to Enjoy Special Day'
 //  }, {
 //    id: 3,
	// class: 'item-4',
	// img: 'img/category/4.jpg',
 //    name: 'Get Well Soon',
 //    lastText: 'Never Give Up.Stand Up soon'
 //  }, {
 //    id: 4,
	// class: 'item-5',
	// img: 'img/category/congrtz.png',
 //    name: 'Congratulation',
 //    lastText: 'Yeeh!!! You did this.'
 //  }];

 //  return {
 //    all: function() {
 //    	$http({     
 //            crossDomain: true,
 //            method: 'GET',
 //            dataType: 'jsonp',
 //            url: 'https://jq55k0ahvf.execute-api.us-east-1.amazonaws.com/dev/category'
 //        }).then(function(response){ 
 //        	console.log(response);
 //        	return response;
 //      },
 //       function(data) {
 //       	console.log(data);
 //        return data;
 //        $ionicLoading.show({ template: 'Some issue !', noBackdrop: true, duration: 2000 });
 //    });
 //      //return cates;
 //    },
 //    get: function(cateId) {
 //      for (var i = 0; i < cates.length; i++) {
 //        if (cates[i].id === parseInt(cateId)) {
 //          return cates[i];
 //        }
 //      }
 //      return null;
 //    }
 //  };
//});

// app.service('Carts', function() {
//     var carts = [{
//         id: 0,
//         cateId: 0,
//         img: 'img/product/thumb1.jpg',
//         imgLg: 'img/product/1.jpg',
//         name: 'BEET ROOT AND RED BEAN VEGAN BURGERS',
//         price: '$10.00',
//         qty: '3'
//     }, {
//         id: 8,
//         cateId: 1,
//         img: 'img/product/thumb9.jpg',
//         imgLg: 'img/product/9.jpg',
//         name: 'CREAMY MUSHROOM SOUP',
//         price: '$35.00',
//         qty: '4'
//     }, {
//         id: 13,
//         cateId: 2,
//         img: 'img/product/thumb14.jpg',
//         imgLg: 'img/product/14.jpg',
//         name: 'BERRY SMOOTHIE',
//         price: '$20.00',
//         qty: '2'
//     }];

//     return {
//         all: function() {
//             return carts;
//         }
//     };
// });
