

  //modules
  var Scientist = Backbone.Model.extend({
    initialize: function () {
      console.log ("A new Scientist has been created");
    },
    defaults:{
      genre:"Famous Scientist"
    },
    _parse_class_name:"FamousScientist",
    idAttribute:"objectId"

    });


    var Router = Backbone.Router.extend ({
      initialize:function(){
        Backbone.history.start({pushState:true});
      },
      routes:{
        "Scientist":"Scientist",
        "field":"field",
        "contributions":"contributions",
        "":"index"
      }
    });

    var router = new Router();

    router.on('rourte:Scientist', function(objectId){
    var Scientist = new Scientist({objectId:objectId});
    Scientist.fetch();
    console.log(Scientist);
    });

    router.on('route:Scientist' , function(){
      console.log("Scientist page");
    });

    router.on('route:field', function(){
    console.log('field page');
    $("a").css({color:"black"});
    });


   router.on('route:contributions' , function(){
      console.log("contributions page");
    });

  $("a").on('click', function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    href = href.substr(1);
    router.navigate(href,{trigger:true});
  });



    var famousScientist = new Scientist();

    famousScientist.set("field", "Theoretical Physicist")
    famousScientist.set({
    Scientist:"Albert Einstien",
    contributions:"Theory of Relativity",
    });

    var field = famousScientist.get("field");


var Scientists = Backbone.Collection.extend({
  model: Scientist,
  _parse_class_name: "FamousScientist"
});

var ScientistsCollection = new Scientists();

famousScientist.save(null, {
  success: function(resp) {
    console.log(resp)

    ScientistsCollection.fetch({
      success: function(resp) {
        console.log("success: ", resp);
      }, error: function (err) {
        console.log("error: ", err);
      }
    })
    },
    error: function (err) {
    console.log(err)
  }
});





