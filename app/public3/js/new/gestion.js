/**
 * @file httpdocs/js/gestion.js toute les fonctions utilisée dans le module gestion
 * @author Dimitrios Lymberis
 * @see '<a href="http://gestionstock.test">Gestion stock</a>'
 * @module gestion
 */

/**
 * Récupère le contenu de la page <b>Modules/Gestion/Views/kind_view</b>
 * </br>pour l'insérer dans la page <b>Modules/Gestion/Views/index.php</b> à la place du bloc DIV <b>load-data-all-kinds</b>
 *  </br>
 * @mermaid
 * graph LR
 *  A -- text --> B -- sdf --> C
 */
var getKinds=function() {	
	"use strict";
   $('#load-data-all-kinds').html(null);
   $('.overlay-all-kind').css('display','block');

   $.ajax({
	   type : "GET",
	   datatype : "html",
	   url : "/kind/view",
   }).done(function(data){
		   $('.overlay-all-kind').css('display','none');
		   $('#load-data-all-kinds').html(data);
		   
		   datatablesRefresh('#datatable-all-kinds');	

		});

}; //getKinds

/**
 * récupère les infos du matériel et l'affiche dans une popup modal pour l'edition
 * @param {number} id clé du matériel à éditer
 */
var  editKind=function(id){
	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'kind/'+id+'/edit',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
    });
} //editKind

/**
 * soumet l'edition d'un matériel
 * @param {number} id clé du matériel
 */
var submit_edit_kind=function (id){

    var oForm = $("#form-edit-kind");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{
		// on récupère les données du formulaire d'ajout
		var kindFormData =oForm.serializeArray();

		 // on ajoute l'id
		 kindFormData[kindFormData.length] = {
			'name' : 'id_kind',
			'value' : id
			
		};

		var kindData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		kindFormData.forEach(function(element) {
			kindData[element.name]=element.value;
		});

		$.ajax({
			type:"POST",
			url:"kind/submit_edit",
			dataType:'json',
			data : 
			{
				'kindData' : JSON.stringify(kindData)
			},
		}).done(function(data){
	
			// on vérifie qu'il n'y a pas d'erreurs
			if ((!data.msgErr == ''))
				{
					Swal.fire(data.msgTitle, data.msgErr, 'error');
					
					return;
				}
				else{
					
					// on modifie le menu matériel en conséquence
					$('#mnuNavMateriel').html(null);
					$('#mnuNavMateriel').html(data.mnuMateriel);
					// pour activer le click sur les items du menu
					App.initSidebar();

					// on met à jour la liste de matériels
					getKinds();
					Swal.fire('Edition!', "<p> Le matériel <em><strong class='text-warning'>"+ kindData['kind_Name'] + "</strong></em> a bien été modifié !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  la modification", textStatus, 'error');
	});  
	}  
} //submit_edit_kind

/**
 * récupère les infos du matériel et l'affiche dans une popup modal pour l'ajout
 */
var  addKind=function(){
	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'kind/add',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
    });
} //addKind

/**
 * soumet l'ajout d'un matériel
 */
var submit_add_kind=function (){

    var oForm = $("#form-add-kind");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{
		// on récupère les données du formulaire d'ajout
		var kindFormData =oForm.serializeArray();

		var kindData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		kindFormData.forEach(function(element) {
			kindData[element.name]=element.value;
		});

		$.ajax({
			type:"POST",
			url:"kind/submit_add",
			dataType:'json',
			data : 
			{
				'kindData' : JSON.stringify(kindData)
			},
		}).done(function(data){
	
			// on vérifie qu'il n'y a pas d'erreurs
			if ((!data.msgErr == ''))
				{
					Swal.fire(data.msgTitle, data.msgErr, 'error');
					
					return;
				}
				else{
					
					// on modifie le menu matériel en conséquence
					$('#mnuNavMateriel').html(null);
					$('#mnuNavMateriel').html(data.mnuMateriel);
					// pour activer le click sur les items du menu
					App.initSidebar();

					// on met à jour la liste de matériels
					getKinds();
					// on met à jour le total
					$('#nbKinds').html(data.nbKinds);

					Swal.fire('Edition!', "<p> Le matériel <em><strong class='text-warning'>"+ kindData['kind_Name'] + "</strong></em> a bien été ajouté !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  l'ajout", textStatus, 'error');
	});  
	}  
} //submit_add_kind

/**
 * Retourne une liste des catégories
 */
var getCategories=function() {
	"use strict";
$('#load-data-all-category').html(null);
$('.overlay-all-category').css('display','block');

$.ajax({
	type : "GET",
	datatype : "html",
	url : "/category/view",
}).done(function(data){
		$('.overlay-all-category').css('display','none');
		$('#load-data-all-category').html(data);
		
		datatablesRefresh('#datatable-all-category');	

	});

}; //getCategories

/**
 * Retourne une liste des fabricants
 */
var getMakers=function() {
	"use strict";

	$('#load-data-all-make').html(null);
	$('.overlay-all-make').css('display','block');

	$.ajax({
		type : "GET",
		datatype : "html",
		url : "/maker/view",
	}).done(function(data){
			$('.overlay-all-make').css('display','none');
			$('#load-data-all-make').html(data);
			
			datatablesRefresh('#datatable-all-make');	

		});

}; //getCategories

/**
 * Retourne une liste salles de sotckage
 */
var getRooms=function() {
	"use strict";
$('#load-data-all-room').html(null);
$('.overlay-all-room').css('display','block');

$.ajax({
	type : "GET",
	datatype : "html",
	url : "/room/view",
}).done(function(data){
		$('.overlay-all-room').css('display','none');
		$('#load-data-all-room').html(data);
		
		datatablesRefresh('#datatable-all-rooms');	

	});

}; //getRooms

/**
 * Retourne une liste des armoires de stockage
 */
var getChests=function() {
	"use strict";
$('#load-data-all-chest').html(null);
$('.overlay-all-ches').css('display','block');

$.ajax({
	type : "GET",
	datatype : "html",
	url : "/chest/view",
}).done(function(data){
		$('.overlay-all-ches').css('display','none');
		$('#load-data-all-chest').html(data);
		
		datatablesRefresh('#datatable-all-chests');	
	});

}; //getChests

/**
 * Retourneune liste des utilisateurs
 */
var getUsers=function() {
	"use strict";
$('#load-data-all-users').html(null);
$('.overlay-all-users').css('display','block');

$.ajax({
	type : "GET",
	datatype : "html",
	url : "/users/view",
}).done(function(data){
		$('.overlay-all-users').css('display','none');
		$('#load-data-all-users').html(data);
		
		datatablesRefresh('#datatable-all-users');	
	});

}; //getUsers

/**
 * Retourne une liste des produits */
var getProducts=function() {
	"use strict";
$('#load-data-all-products').html(null);
$('.overlay-all-product').css('display','block');

$.ajax({
	type : "GET",
	datatype : "html",
	url : "/product/view",
}).done(function(data){
		$('.overlay-all-product').css('display','none');
		$('#load-data-all-products').html(data);
		
		datatablesRefresh('#datatable-all-products');	

	});

}; //getProducts

/**
 * Retourne une liste des articles
 */
var getArticles=function() {
	"use strict";
$('#load-data-all-products').html(null);
$('.overlay-all-product').css('display','block');

$.ajax({
	type : "GET",
	datatype : "html",
	url : "/article/view",
}).done(function(data){
		$('.overlay-all-product').css('display','none');
		$('#load-data-all-products').html(data);
		
		datatablesRefresh('#datatable-all-products');	

	});

}; //getArticles

/**
 * Retourne une liste des articles pour la fenêtre recherche
 */
var  getArticlesSearch=function(){
	"use strict";
	$('#load_search-data-all-articles').html(null);
	$('.overlay_search-all-article').css('display','block');

	$.ajax({
		type : "GET",
		datatype : "html",
		url : "/articles/search_view",
	}).done(function(data){
			$('.overlay_search-all-article').css('display','none');
			$('#load_search-data-all-articles').html(data);
			
			datatablesSearchRefresh('#datatable-all-search_articles');
			var table = $('#datatable-all-search_articles').DataTable();
			
			//table.dataTable({bFilter: false, bInfo: false});

		});

}; //getArticlesSearch

var setFilterSearch=function(){
	"use strict";
	
	var table = $('#datatable-all-search_articles').DataTable();
 
	// #myInput is a <input type="text"> element
	$('#search_article').on( 'keyup', function () {
		table.search( this.value ).draw();
	});
}




/**
 * 
 */
var oGestion=function(){
	"use strict";
	return{
		all:function(){
			getKinds();
			getCategories();
			getMakers();
			getRooms();
			getChests();
			getUsers();
			getProducts();
		}
	};
}();



