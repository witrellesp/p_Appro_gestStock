/**
 * @file httpdocs/js/borrow.js toute ce qui concerne les emprunts
 * @author Dimitrios Lymberis
 * @Date 06.02.2021
 * @see '<a href="http://gestionstock.test">Gestion stock</a>'
 * @module borrow
 */

 /***
 * --------------------------------------------------------
 * *** 			ENTETE DE MODULE - borrow.js			***
 * --------------------------------------------------------
 * ETML
 * Auteur 		: Dimitrios Lymberis
 * Date 		: 15.02.2019
 * *************************************
 * Description 	: gestion des emprunts
 *				  ajout modification et suppression des
 *				  emprunts avec jquery ajax
 *
 * ---------------------------------------------------------
 */


var classIcoIn="fas fa-sign-out-alt fa-rotate-270 fa-2x width-30 height-30 f-s-20 text-center";
var classIcoOut="fas fa-sign-in-alt fa-rotate-90  width-30 height-30 f-s-20  text-center";

var classCheckIn="fas fa-lg fa-fw m-r-10 fa-check fa-2x text-green";
var classCheckOut="fas fa-lg fa-fw m-r-10 fa-times fa-2x  text-red";

/**
 * lit les emprunts et les affichent
 * 				  dans la fenêtre mes emprunts
 * 				  de l'utilisateur connecté
 * @Auteur 		: Dimitrios Lymberis
 * @Date 		: 15.02.2019
 *
 * @param idUser {number}	identifiant de l'emprunteur
 * @return les emprunts
 */
function readMyBorrowRecords(idUser) {

	$('#load-data-filleul').html(null);
	$('.overlay-all-borrow').css('display','block');
	
	$.ajax({
		type : "GET",
		datatype : "html",
		url : "/borrow/"+idUser+"/myborrow",
	}).done(function(data){
			$('.overlay-my-borrow').css('display','none');
			$('#load-data-my-borrow').html(data);
			
			datatablesRefresh('#datatable-my-borrows');	
		});

} //readMyBorrowRecords

/***
 * --------------------------------------------------------
 * *** 			readAllBorrowRecords 				***
 * --------------------------------------------------------
 *
 * ETML
 * Auteur 		: Dimitrios Lymberis
 * Date 		: 15.02.2019
 * Description 	: lit tous les emprunts actifs
 *
 *
 * ---------------------------------------------------------
 */
function readAllBorrowRecords() {

	$('#load-data-filleul').html(null);
    $('.overlay-all-borrow').css('display','block');

	$.ajax({
		type : "GET",
		datatype : "html",
		url : "/borrow/view",
	}).done(function(data){
			$('.overlay-all-borrow').css('display','none');
			$('#load-data-all-borrow').html(data);
			
			datatablesRefresh('#datatable-all-borrows');	

		});

} //readAllBorrowRecords


/***
 * --------------------------------------------------------
 * *** 						setBorrow 					***
 * --------------------------------------------------------
 *
 * ETML
 * Auteur 		: Dimitrios Lymberis
 * Date 		: 21.03.2017
 * Description 	: cette méthode modifie le contenu de la
 * 				  popup modal modAddUpdateBorrow.php appelé
 * 				  depuis la page index.php du module article
 * 				  sur le bouton indiquant si l'article est en 
 * 				  stock ou emprunté
 * 				  
 *
 * @param idUser 	--> identifiant de l'emprunteur (user)
 * @param idBorrow	--> identifiant de l'emprunt
 * @param borrType 	0 --> add (ajout)
 * 				 	1 --> back (retour)  
 * 					2 --> update (Mise à jour)
 * 				  	3 --> delete
* @param idArticle	--> identifiant de l'article
 
 *
 * ---------------------------------------------------------
 */
function setModBorrow(idUser,borrType,idBorrow,idArticle) {

	var datas = null;
	var ladate=new Date()

	var proPicture="/img/nophoto.jpg";

	// si on veut retourner un emprunt
	if (borrType == 1) {

		$("#borrButtonSubmit").text("Retour");


		$("#borrForWho").hide();
		$("#borrReasPlace").hide();
		$("#borrNote").show();

		$("#borrVisa").text('Visa');
		$("#borrLblDate").text('Date de retour');

		// on met à jour l'évènement click du bouton ajouter
		document.getElementById('borrButtonSubmit').onclick=function(){backBorrow(idBorrow,idArticle);};

		//$("#take_date").val(ladate.getDate()+"."+(ladate.getMonth()+1)+"."+ladate.getFullYear())
		//$('#take_date').datetimepicker();
		$.ajax({
			type : "GET",
			datatype : "json",
			url : "/articles/"+idArticle+"/get",
			success: function (data) { 
				var value = data;

				
				console.log('retour emprunt')
				console.log(typeof data, data)
				

				$("#borrModalHeaderLabel").text("Retour d'un prêt : "+value.arti_label);

				$( "#borrDtPicker" ).datepicker( "setDate", new Date() );

				if (value.prod_picture){
					proPicture="/img/products/"+value.prod_picture+".jpg";
				}

				$('#borr_prod_img').attr('src', proPicture);

				$('#borr_prod_name').html(value.prod_name);
				$('#borr_prod_descr').html(value.prod_description);
				$('#borr_prod_note').html(value.prod_note);
				$('#borr_arti_note').html(value.arti_note);
			}
		});

		// Open modal popup
		$("#borrModalAddUpdate").modal("show");

	} //(remType  = 0)
	
	// si on veut ajouter un emprunt
	else if (borrType==0){

		$("#borrForWho").show();
		$("#borrReasPlace").show();
		$("#borrNote").hide();

		$("#borrVisa").text('Visa');
		$("#borrLblDate").text('Date du prêt');

		$("#borrButtonSubmit").text("Ajouter");
		// on met à jour l'évènement click du bouton ajouter		
		$('#borrButtonSubmit').attr('onclick',"addBorrow("+idArticle+")");

		// On réinitialise les élèments de la popup
		formBorrowDataReset()

		//$("#take_date").val(ladate.getDate()+"."+(ladate.getMonth()+1)+"."+ladate.getFullYear())
		//$('#take_date').datetimepicker();
		$.ajax({
				type : "GET",
				datatype : "json",
				url : "/articles/"+idArticle+"/get",
				success: function (data) { 
					var value = data;

									
				console.log('ajout emprunt')
				console.log(typeof data, data)

					$("#borrModalHeaderLabel").text("Ajout d'un prêt : "+value.arti_label);

					
					if (value.prod_picture){
						proPicture="/img/products/"+value.prod_picture+".jpg";
					}

					$( "#borrDtPicker" ).datepicker( "setDate", new Date() );


					$('#borr_prod_img').attr('src', proPicture);

					$('#borr_prod_name').html(value.prod_name);
					$('#borr_prod_descr').html(value.prod_description);
					$('#borr_prod_noter').html(value.prod_note);
					$('#borr_arti_note').html(value.arti_note);
				}
			});

		// Open modal popup
		$("#borrModalAddUpdate").modal("show");
	}

	// si on veut mettre à jour un emprunt
	else if (borrType==2){

		
		
		$("#borrButtonSubmit").text("Retour");
	

		$("#borrForWho").Hide();
		$("#borrReasPlace").Hide();

		$("#borrVisa").text('Visa de retour');
		$("#borrLblDate").text('Date du retour');


		// on met à jour l'évènement click du bouton ajouter
		document.getElementById('borrButtonSubmit').onclick=function(){backBorrow(idUser,idArticle);};

		// On réinitialise les élèments de la popup
		formBorrowDataReset()

		//$("#take_date").val(ladate.getDate()+"."+(ladate.getMonth()+1)+"."+ladate.getFullYear())
		
		$.ajax({
				type : "GET",
				datatype : "json",
				url : "/articles/"+idArticle+"/get",
				success: function (data) { 
					var value = $.parseJSON(data);

					$("#borrModalHeaderLabel").text("Retour d'un prêt : "+value.arti_label);

					$('#borr_prod_img').attr('src', "/img/products/"+value.prod_picture+".jpg");

					$('#borr_prod_name').html(value.prod_name);
					$('#borr_prod_descr').html(value.prod_description);
					$('#borr_prod_noter').html(value.prod_note);
					$('#borr_arti_note').html(value.arti_note);
				}
			});


		// Open modal popup
		$("#borrModalAddUpdate").modal("show");
	}
	// suppression d'un rattrapage (remType=2)
	else{
	}
} //setRem



/**
 * @author		DLS
 * @date		20.02.2019
 * @summary		Ajout d'un emprunt
 *
 * @param {int} idArticle  identifiant de l'article
 */
function addBorrow(idArticle) {



	/* On vérifie que les données soient bien renseignées */
	var strMsgErreur=formBorrowDataValidate();

	/* si il y a une erreur on ne fait rien .. on reste sur la popup */
	if (!(strMsgErreur=="")) {
		return;
	}

		var oForm = $("#borrow_form");
		
		$.ajax({
			type: "POST",
			url: "/borrow/"+idArticle+"/add",
			data: oForm.serialize(),
			success: function(data){
				
				

				// on ferme la popup
				$("#borrModalAddUpdate").modal("hide");

				// on met à jour les icônes et le check du prêt ainsi que l'évènement click du bouton affichage de la popup d'emprunt
				location.reload();

				// on efface le contenu des  champs du popup
				formBorrowDataReset();

			},
			error: function(){
				Swal.fire({
  					customClass: 'zoomIn',
					titleText: "ERREUR",
					type: "error",
					html: "<div class='alert alert-danger'><strong>Survenue dans  addBorrow :</strong> module borrow.js</div>",		
					showConfirmButton:	true,
					confirmButtonColor: '#6c757d',
					confirmButtonText: "Fermer"
				  });

				
			}
		});

	
} //addBorrow



/**
 * @author		DLS
 * @date		20.02.2019
 * @summary		Retour d'un emprunt
 * 
 * @param {int} idBorrow  identifiant de l'emprunt
 * @param {int} idArticle identifiant de l'article
 */
 function backBorrow(idBorrow,idArticle) {


		/* On vérifie que les données soient bien renseignées */
		strMsgErreur='';
		//var strMsgErreur=formBorrowDataValidate();

		/* si il y a une erreur on ne fait rien .. on reste sur la popup */
		if (!(strMsgErreur=="")) {
			return;
		}

		var oForm = $("#borrow_form");
		
		$.ajax({
			type: "POST",
			url: "/borrow/"+idBorrow+"/back",
			data: oForm.serialize(),
			success: function(data){

				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 3000
				  });
				  
				  Toast.fire({
					type: 'success',
					title: 'retour réussi'
				  });


				// on ferme la popup
				$("#borrModalAddUpdate").modal("hide");

				// on met à jour les icônes et le check du prêt ainsi que l'évènement click du bouton affichage de la popup d'emprunt
				location.reload();

				// on efface le contenu des  champs du popup
				formBorrowDataReset();

			},

			error: function(){
				Swal.fire({
  					customClass: 'zoomIn',
					titleText: "ERREUR",
					type: "error",
					html: "<div class='alert alert-danger'><strong>Survenue dans  backBorrow :</strong> module borrow.js</div>",		
					showConfirmButton:	true,
					confirmButtonColor: '#6c757d',
					confirmButtonText: "Fermer"
				  });

				
			}
		});

} //backBorrow

/***
 * --------------------------------------------------------
 * *** 						delRem 						***
 * --------------------------------------------------------
 * ETML
 * Auteur 				: DLS
 * Date 				: 15.03.2017
 * Description 			: Suppression d'une remédiation
 * 						 (rattrapage)
 *
 * @param idRemedial  	--> clé du rattrapage à supprimer
 * @param idStudent		--> clé de de l'étudiant
 *
 * ---------------------------------------------------------
 */
function delRem(idRemedial,idStudent){

	$.ajax({
		type: "GET",
		url: "/remedial/delete/"+ idRemedial,
		success: function(){

			// on met à jour les enregistrement dans la table
			readStudentRemedialRecords(idStudent);

			// on ferme la popup de suppression
			$("#modal-delete").modal("hide");

		},
		error: function(){
			bootbox.alert({
				title: "<strong>ERREUR Supression</strong>",
				message: '<div class="alert alert-warning"><strong>Survenue dans  delRem :</strong> module remedial.js</div>'
			});
		}
	});
} //delRem

/***
 * --------------------------------------------------------
 * *** 			formRemedialDataValidate 		    	***
 * --------------------------------------------------------
 * ETML
 * Auteur 				: DLS
 * Date 				: 24.03.2017
 * Description 			: Contrôle des données dans
 * 						  le formulaire d'ajout ou de
 * 						  modification de rattrapage
 *
 * ---------------------------------------------------------
 */
function formBorrowDataValidate() {


	event.preventDefault();
	var error_Msg = '';

	
	if($('#taken_borrow_visa').val() == '')
	{
		error_Msg = 'Le champ est obligatoire';
		$('#error_taken_borrow_visa').text(error_Msg);
		$('#taken_borrow_visa').css('border-color', '#cc0000');
	}
	else
	{
		
		$('#error_taken_borrow_visa').text('');
		$('#taken_borrow_visa').css('border-color', '');
	}

	if ($("#taken_place").val()=="" ) {

		error_Msg = 'Le champ est obligatoire';
		$('#error_taken_place').text(error_Msg);
		$('#taken_place').css('border-color', '#cc0000');
	}
	else
	{
		
		$('#error_taken_place').text('');
		$('#taken_place').css('border-color', '');
	}
	
	

	return error_Msg;

} //formBorrowDataValidate

/***
 * --------------------------------------------------------
 * *** 					formBorrowDataReset 		  		  	***
 * --------------------------------------------------------
 * ETML
 * Auteur 				: DLS
 * Date 				: 24.02.2019
 * Description 			: Réinitialise les élèments de la
 * 						  popup d'emprunt (add/upd)
 *
 * ---------------------------------------------------------
 */
function formBorrowDataReset(){

	// on efface le contenu des  champs de la  popup
	$("#taken_forwho_visa").val("");
	$("#taken_place").val("");
	$("#taken_reason").val("");
	$("#take_date").val("");	

	// supprime les messages d'ereurs
	$('#error_taken_forwho_visa').text('');
	$('#taken_forwho_visa').css('border-color', '');

	$('#error_taken_place').text('');
	$('#taken_place').css('border-color', '');


	
} //formBorrowDataReset


/***
 * --------------------------------------------------------
 * *** 			$("#remDtPicker").datepicker 			***
 * --------------------------------------------------------
 *
 * ETML
 * Auteur 		: Dimitrios Lymberis
 * Date 		: 21.03.2017
 * Description 	: Il s'agit du formattage de la popup date
 * 				  dans le formulaire de rattrappage,
 *
 *
 * 				  Remarque:
 * 				  altField: "#hideRemDtPicker" il s'agit d'un champ
 * 				  caché avec la date choisie au format définit
 * 				  dans altFormat: "yy-mm-dd",  ce qui permet
 * 				  d'afficher ce qu'on le veut et récupérer
 * 				  par post le champ caché au format que l'on
 * 				  veut !!
 *
 * ---------------------------------------------------------
 */
$(function() {
	$("#borrDtPicker").datepicker({
		closeText: 'Fermer',
		prevText: '',
		nextText: '',
		currentText: 'Aujourd\'hui',
		monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
		monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
		dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
		dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
		dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
		weekHeader: 'Sem.',
		dateFormat: 'D , dd MM yy',
		altFormat: "yy-mm-dd",
		altField: "#hideBorrDtPicker",
		showWeek: true,
		changeMonth: true,
		changeYear: true,
		firstDay: 1
	});
});


