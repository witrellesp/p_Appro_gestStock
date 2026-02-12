/**
 * @file httpdocs/js/gestion.js toute les fonctions utilisée dans le module gestion
 * @author Dimitrios Lymberis
 * @see '<a href="http://gestionstock.test">Gestion stock</a>'
 * @module gestion
 */


/** ****************************************************************************
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
					Swal.fire('Ajout!', "<p> Le matériel <em><strong class='text-warning'>"+ kindData['kind_Name'] + "</strong></em> a bien été modifié !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  la modification", textStatus, 'error');
	});  
	}  
} //submit_edit_kind


/** ****************************************************************************
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
 * Affiche la modal d'ajout de catégorie
 */
var  addCategory=function(){
	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'category/add',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
    });
} //addKind

/**
 * soumet l'ajout d'une catégorie
 */
var submit_add_category=function (){

    var oForm = $("#form-add-category");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{

		// on récupère le nom du matériel
		var element = document.getElementById('kind_list');
		var kind_name = element.options[ element.selectedIndex ].text;
	
		// on récupère les données du formulaire d'ajout
		var oFormData =oForm.serializeArray();

		var oData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		oFormData.forEach(function(element) {
			oData[element.name]=element.value;
		});

		$.ajax({
			type:"POST",
			url:"category/submit_add",
			dataType:'json',
			data : 
			{
				'categoryData' : JSON.stringify(oData)
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

					// on met à jour la liste des catégories
					getCategories();
					// on met à jour le total
					$('#nbCategories').html(data.nbCategories);

					Swal.fire('Ajout!', "<p> Le catégorie <em><strong class='text-warning'>"+ oData['cate_name'] + "</strong></em> pour le matériel ("+ kind_name +") </br>a bien été ajouté !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  l'ajout", textStatus, 'error');
	});  
	}  
} //submit_add_kind

var  editCategory=function(id){

	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'category/'+id+'/edit',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
    });

}

/**
 * soumet l'edition d'un matériel
 * @param {number} id clé du matériel
 */
var submit_edit_category=function (id){

    var oForm = $("#form-edit-category");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{
		// on récupère le nom du matériel
		var element = document.getElementById('kind_list');
		var kind_name = element.options[ element.selectedIndex ].text;

		// on récupère les données du formulaire d'ajout
		var oFormData =oForm.serializeArray();

		 // on ajoute l'id
		 oFormData[oFormData.length] = {
			'name' : 'id_cate',
			'value' : id
			
		};

		var oData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		oFormData.forEach(function(element) {
			oData[element.name]=element.value;
		});

		$.ajax({
			type:"POST",
			url:"category/submit_edit",
			dataType:'json',
			data : 
			{
				'categoryData' : JSON.stringify(oData)
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
					getCategories();
					Swal.fire('Modification!', "<p> Le matériel <em><strong class='text-warning'>"+ oData['cate_name'] + "</strong></em> pour le matériel ("+ kind_name +") </br> a bien été modifié !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  la modification", textStatus, 'error');
	});  
	}  
} //submit_edit_category


/** ****************************************************************************
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
 * Affiche la modal d'ajout de fabricant
 */
var  addMaker=function(){
	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'maker/add',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
    });
} //addMaker

/**
 * soumet l'ajout d'un fabricant
 */
var submit_add_maker=function (){

    var oForm = $("#form-add-maker");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{

		
	
		// on récupère les données du formulaire d'ajout
		var oFormData =oForm.serializeArray();

		var oData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		oFormData.forEach(function(element) {
			oData[element.name]=element.value;
		});

		// on récupère la photo au format "binaire"  
        var makerPhoto =$('#item-img-output').attr('src');   

		$.ajax({
				type:"POST",
				url:"maker/submit_add",
				dataType:'json',
				data : 
				{
					'makerData' : JSON.stringify(oData),
					'makerPhoto' : makerPhoto
				},
			}).done(function(data){
		
				// on vérifie qu'il n'y a pas d'erreurs
				if ((!data.msgErr == ''))
					{
						Swal.fire(data.msgTitle, data.msgErr, 'error');
						
						return;
					}
					else{
						
						
						// on met à jour la liste des fabricant
						getMakers();
						// on met à jour le total
						$('#nbMakers').html(data.nbMakers);

						Swal.fire('Ajout!', "<p> Le fabricant <em><strong class='text-warning'>"+ oData['make_name'] + "</strong></em> </br>a bien été ajouté !</p>", 'success'); 
						$('#gestion-modal').modal("hide");
						
					}				
				
			}).fail(function (jqXHR, textStatus) {
				Swal.fire("ERREUR! lors de  l'ajout", textStatus, 'error');
		});  
	}  
} //submit_add_maker

/**
 * récupère les infos du fabricant et l'affiche dans une popup modal pour l'edition
 * @param {number} id clé du fabricant à éditer
 */
var  editMaker=function(id){
	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'maker/'+id+'/edit',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
	});
	
} //editMaker

/**
 * soumet l'edition d'un fabricant
 * @param {number} id clé du fabricant
 */
var submit_edit_maker=function (id){

    var oForm = $("#form-edit-maker");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{
		// on récupère les données du formulaire d'edition
		var oFormData =oForm.serializeArray();

		// on ajoute l'id
		oFormData[oFormData.length] = {
			'name' : 'id_make',
			'value' : id
			
		};
		var oData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		oFormData.forEach(function(element) {
			oData[element.name]=element.value;
		});

		// on récupère la photo au format "binaire"  
        var makerPhoto =$('#item-img-output').attr('src');   

		$.ajax({
			type:"POST",
			url:"maker/submit_edit",
			dataType:'json',
			data : 
			{
				'makerData' : JSON.stringify(oData),
                'makerPhoto' : makerPhoto
			},
		}).done(function(data){
	
			// on vérifie qu'il n'y a pas d'erreurs
			if ((!data.msgErr == ''))
				{
					Swal.fire(data.msgTitle, data.msgErr, 'error');
					
					return;
				}
				else{
					
					
					// on met à jour la liste des fabricant
					getMakers();
					

					Swal.fire('Edition!', "<p> Le fabricant <em><strong class='text-warning'>"+ oData['make_name'] + "</strong></em> </br>a bien été modifié !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  l'ajout", textStatus, 'error');
	});  
	}  
} //submit_edit_maker


/** ****************************************************************************
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
 * Affiche la modal d'ajout de locaux
 */
var  addRoom=function(){

	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'room/add',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
	});
	
}

/**
 * soumet l'ajout d'un lieu de stockage
 */
var submit_add_room=function (){

	var oForm = $("#form-add-room");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{
		// on récupère les données du formulaire d'ajout
		var roomFormData =oForm.serializeArray();

		var roomData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		roomFormData.forEach(function(element) {
		roomData[element.name]=element.value;
		});

		$.ajax({
			type:"POST",
			url:"room/submit_add",
			dataType:'json',
			data : 
			{
				'roomData' : JSON.stringify(kindData)
			},
		}).done(function(data){
	
			// on vérifie qu'il n'y a pas d'erreurs
			if ((!data.msgErr == ''))
				{
					Swal.fire(data.msgTitle, data.msgErr, 'error');
					
					return;
				}
				else{
					
					// on met à jour la liste de matériels
					getRooms();
					// on met à jour le total
					$('#nbRooms').html(data.nbRooms);

					Swal.fire('Edition!', "<p> Le lieu de stockage <em><strong class='text-warning'>"+ roomData['room_Name'] + "</strong></em> a bien été ajouté !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  l'ajout", textStatus, 'error');
	});  
	}  

}

/**
 * récupère les infosd'un local et l'affiche dans une popup modal pour l'edition
 * @param {number} id clé du local à éditer
 */
var  editRoom=function(id){

	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'room/'+id+'/edit',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
    });
}

/**
 * soumet l'edition d'un local
 * @param {number} id clé du local
 */
var submit_edit_room=function (id){

	var oForm = $("#form-edit-room");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{
		// on récupère les données du formulaire d'ajout
		var roomFormData =oForm.serializeArray();

		 // on ajoute l'id
		 roomFormData[roomFormData.length] = {
			'name' : 'id_room',
			'value' : id
			
		};

		var roomData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		roomFormData.forEach(function(element) {
			roomData[element.name]=element.value;
		});

		$.ajax({
			type:"POST",
			url:"room/submit_edit",
			dataType:'json',
			data : 
			{
				'roomData' : JSON.stringify(roomData)
			},
		}).done(function(data){
	
			// on vérifie qu'il n'y a pas d'erreurs
			if ((!data.msgErr == ''))
				{
					Swal.fire(data.msgTitle, data.msgErr, 'error');
					
					return;
				}
				else{
					
					// on met à jour la liste de matériels
					getRooms();
					Swal.fire('Ajout!', "<p> Le lieu de stockage <em><strong class='text-warning'>"+ roomData['room_Name'] + "</strong></em> a bien été modifié !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  la modification", textStatus, 'error');
	});  
	}  
}

/** ****************************************************************************
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
 * Affiche la modal d'ajout de catégorie
 */
 var  addChest=function(){
	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'chest/add',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
    });
} //addKind

/**
 * soumet l'ajout d'une armoire
 */
var submit_add_Chest=function (){

    var oForm = $("#form-add-chest");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{

		// on récupère le nom de la salle
		var element = document.getElementById('room_list');
		var room_name = element.options[ element.selectedIndex ].text;
	
		// on récupère les données du formulaire d'ajout
		var oFormData =oForm.serializeArray();

		var oData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		oFormData.forEach(function(element) {
			oData[element.name]=element.value;
		});

		$.ajax({
			type:"POST",
			url:"chest/submit_add",
			dataType:'json',
			data : 
			{
				'chestData' : JSON.stringify(oData)
			},
		}).done(function(data){
	
			// on vérifie qu'il n'y a pas d'erreurs
			if ((!data.msgErr == ''))
				{
					Swal.fire(data.msgTitle, data.msgErr, 'error');
					
					return;
				}
				else{
				
					// on met à jour la liste des armoires
					getChests();
					// on met à jour le total
					$('#nbchests').html(data.nbChests);

					Swal.fire('Ajout!', "<p> L'armoire <em><strong class='text-warning'>"+ oData['chest_name'] + "</strong></em> à bien été ajoutée à la salle ("+ room_name +") </br>a bien été ajouté !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  l'ajout", textStatus, 'error');
	});  
	}  
} //submit_add_Chest

var  editChest=function(id){

	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'chest/'+id+'/edit',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
    });

}

/**
 * soumet l'edition d'un matériel
 * @param {number} id clé du matériel
 */
var submit_edit_Chest=function (id){

    var oForm = $("#form-edit-category");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{
		// on récupère le nom du matériel
		var element = document.getElementById('kind_list');
		var kind_name = element.options[ element.selectedIndex ].text;

		// on récupère les données du formulaire d'ajout
		var oFormData =oForm.serializeArray();

		 // on ajoute l'id
		 oFormData[oFormData.length] = {
			'name' : 'id_cate',
			'value' : id
			
		};

		var oData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		oFormData.forEach(function(element) {
			oData[element.name]=element.value;
		});

		$.ajax({
			type:"POST",
			url:"category/submit_edit",
			dataType:'json',
			data : 
			{
				'categoryData' : JSON.stringify(oData)
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
					getCategories();
					Swal.fire('Modification!', "<p> Le matériel <em><strong class='text-warning'>"+ oData['cate_name'] + "</strong></em> pour le matériel ("+ kind_name +") </br> a bien été modifié !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  la modification", textStatus, 'error');
	});  
	}  
} //submit_edit_Chest


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
	url : "/user/view",
}).done(function(data){
		$('.overlay-all-users').css('display','none');
		$('#load-data-all-users').html(data);
		
		datatablesRefresh('#datatable-all-users');	
	});

}; //getUsers

/**
 * Affiche la modal d'ajout d'un utilisateur
 */
var  addUser=function(){
	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'user/add',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
    });
} //addUser

/**
 * soumet l'ajout d'une catégorie
 */
var submit_add_user=function (){

    var oForm = $("#form-add-user");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{

		// pas de retour si checkbox pas coché
		var elCheckAdmin = document.getElementById('user_group');		
		var user_group=elCheckAdmin.checked?1:0;

		// on récupère la photo au format "binaire"  
		var userPhoto =$('#item-img-output').attr('src');  

		// on récupère les données du formulaire d'ajout
		var oFormData =oForm.serializeArray();

		// on ajoute le user group
		oFormData[oFormData.length] = {
			'name' : 'user_group',
			'value' : user_group		
		};

		var oData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		oFormData.forEach(function(element) {
			oData[element.name]=element.value;
		});

		$.ajax({
			type:"POST",
			url:"user/submit_add",
			dataType:'json',
			data : 
			{
				'userData' : JSON.stringify(oData),
				'userPhoto' : userPhoto
			},
		}).done(function(data){
	
			// on vérifie qu'il n'y a pas d'erreurs
			if ((!data.msgErr == ''))
				{
					Swal.fire(data.msgTitle, data.msgErr, 'error');
					
					return;
				}
				else{
					
					// on met à jour la liste des catégories
					getUsers();
					// on met à jour le total
					$('#nbusers').html(data.nbUsers);

					Swal.fire('Ajout!', "<p> L'utilisateur <em><strong class='text-warning'>"+ oData['user_firstname'] + " " + oData['user_name'] +" </br>a bien été ajouté !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  l'ajout", textStatus, 'error');
	});  
	}  
} //submit_add_User

/**
 * Affiche la modal d'édition d'un utilisateur
 */
var  editUser=function(id){

	"use strict";
    $('#gestion-modal').html(null);

    $.ajax({
        type:'GET',
        url:'user/'+id+'/edit',
        dataType:'html',
    }).done(function(html){
        $('#gestion-modal').append(html);
        $('#gestion-modal').modal("show");
    });
}

/**
 * soumet l'edition d'un utilisateur
 * @param {number} id clé de l'utilisateur
 */
var submit_edit_user=function (id){

    var oForm = $("#form-edit-user");

	if (oForm[0].checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	oForm.addClass('was-validated');
	}
	else{
		
		// on récupère le nom du matériel
		var chk_group = $('#chk_user_group').is(":checked");
		var chk_actif =  $('#chk_user_actif').is(":checked");

		// on récupère la photo au format "binaire"  
		var userPhoto =$('#item-img-output').attr('src');  

		// on récupère les données du formulaire d'ajout
		var oFormData =oForm.serializeArray();

		 // on ajoute l'id
		 oFormData[oFormData.length] = {
			'name' : 'user_id',
			'value':id		
		};

		oFormData.push({
			'name' : 'user_group',
			'value':chk_group
		});

		oFormData.push({
			'name' : 'user_actif',
			'value':chk_actif
		});

		var oData = {};

		//on transforme les données du formulaire en un tableau associatif (json)
		oFormData.forEach(function(element) {
			oData[element.name]=element.value;
		});

		$.ajax({
			type:"POST",
			url:"user/submit_edit",
			dataType:'json',
			data : 
			{
				'userData' : JSON.stringify(oData),
				'userPhoto' : userPhoto
			},
		}).done(function(data){
	
			// on vérifie qu'il n'y a pas d'erreurs
			if ((!data.msgErr == ''))
				{
					Swal.fire(data.msgTitle, data.msgErr, 'error');
					
					return;
				}
				else{
					
					
					// on met à jour la liste des utilisateurs
					getUsers();
					Swal.fire('Modification!', "<p> L'utilisateur <em><strong class='text-warning'>"+ oData['user_id'] +" </br> a bien été modifié !</p>", 'success'); 
					$('#gestion-modal').modal("hide");
					
				}				
			
		}).fail(function (jqXHR, textStatus) {
			Swal.fire("ERREUR! lors de  la modification", textStatus, 'error');
	});  
	}  
} //submit_edit_User

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
};






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



