/**
 * @file httpdocs/js/borrow.js toute ce qui concerne les emprunts
 * @author Dimitrios Lymberis
 * @Date 06.02.2021
 * @see '<a href="http://gestionstock.test">Gestion stock</a>'
 * @module etml
 */


// affiche l'alert pour une durée 
$(".alert").show("slow").delay(50000).hide("slow");

/**
 * 
 */
function loginUser() {

	/* On vérifie que les données soient bien renseignées */
	var strMsgErreur=formLoginDataValidate();

	/* si il y a une erreur on ne fait rien .. on reste sur la popup */
	if (!(strMsgErreur=="")) {
		return;
	}

		var oForm = $("#frm-login");
		
		$.ajax({
			type: "POST",
			url: "/login",
			data: oForm.serialize(),
			success: function(data){

				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 2000
				  });
				  
				  Toast.fire({
					type: 'success',
					title: 'Connection réussi',
					onBeforeOpen: () => {
						formLoginDataReset();
					  },
					onClose: () => {

						
					  }
					}).then((result) => {
					  if (
						// Read more about handling dismissals
						result.dismiss === Swal.DismissReason.timer
					  ) {
						
						window.location.replace(data);
					  }
				  });


				// on efface le contenu des  champs du popup
				//formLoginDataReset();

				//window.location.replace(data);

			},

			error: function(){
				Swal.fire({
  					customClass: 'zoomIn',
					titleText: "ERREUR",
					type: "error",
					html: "<div class='alert alert-danger'><strong>Survenue dans  loginUser :</strong> module etml.js</div>",		
					showConfirmButton:	true,
					confirmButtonColor: '#6c757d',
					confirmButtonText: "Fermer"
				  });

				
			}
		});

}

/**
 * 
 */
function formLoginDataValidate() {


	event.preventDefault();
	var error_Msg = '';
	
	if($('#login').val() == '')
	{
		error_Msg = 'Le champ est obligatoire';
		$('#error_login').text(error_Msg);
		$('#login').css('border-color', '#cc0000');
	}
	else
	{
		error_Msg = '';
		$('#error_login').text('');
		$('#login').css('border-color', '');
	}

	if ($("#password").val()=="" ) {

		error_Msg = 'Le champ est obligatoire';
		$('#error_password').text(error_Msg);
		$('#password').css('border-color', '#cc0000');
	}
	else
	{
		error_Msg = '';
		$('#error_password').text('');
		$('#password').css('border-color', '');
	}
	

	return error_Msg;

} //formLoginDataValidate

/**
* Réinitialise les élèments de la
*
*/
function formLoginDataReset(){

	// on efface le contenu des  champs de la  popup
	$("#login").val("");
	$("#password").val("");

	// supprime les messages d'ereurs
	$('#error_login').text('');
	$('#login').css('border-color', '');
	
	$('#error_password').text('');
	$('#password').css('border-color', '');

} //formLoginDataReset


/* ------------------------------------------------------------------- */
/* --------------------Formate la datatable  ------------------------- */
/* ------------------------------------------------------------------- */
function datatablesSearchRefresh(idTableToRefrech) {

    if (!$.fn.dataTable) return;       

    // Filter
    $(idTableToRefrech).DataTable({
        
        'paging': true, // Table pagination
        'ordering': true, // Column ordering
        'colReorder': true,
        'info': true, // Bottom left status text
        "rowHeight": "auto",
        columnDefs: [
            { width: 150, targets: 0 },
            { width: 400, targets: 6 }
        ],
        // Text translation options
        // Note the required keywords between underscores (e.g _MENU_)
        // Affichage de l'&eacute;l&eacute;ment  pour élément
        // "sSearch":         "Rechercher&nbsp;:",
        //"sLengthMenu":     "Afficher&nbsp;  _MENU_ &eacute;l&eacute;ments &nbsp;",
        //"sPrevious":   "Pr&eacute;c&eacute;dent",
        //"sNext":       "Suivant",
        oLanguage: {"sProcessing":     "Traitement en cours...",
            "sSearch":         "Rech. ",
            "sLengthMenu":     "Afficher&nbsp;  _MENU_ lignes &nbsp;",
            "sInfo":           " _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
            "sInfoEmpty":      " 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
            "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
            "sInfoPostFix":    "",
            "sLoadingRecords": "Chargement en cours...",
            "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
            "sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
            "oPaginate": {
                "sFirst":      "Premier",
                "sPrevious":   "<<",
                "sNext":       ">>",
                "sLast":       "Dernier"
            },
            "oAria": {
                "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
                "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
            },
            "select": {
                    "rows": {
                        _: " %d lignes séléctionnées",
                        0: " Aucune ligne séléctionnée",
                        1: " 1 ligne séléctionnée"
                    } 
            }
        },
        "iDisplayLength": 5,
        "lengthMenu": [[5, 10, 15, 20, 25, -1], [5,10,15,20,25,"Tous"]],
        // Datatable Buttons setup
        dom: 'ltBfrtip',
        buttons: [
            //{ extend: 'copy', className: 'btn-info' },
            //{ extend: 'csv', className: 'btn-info' },
            { extend: 'excel', className: 'btn-info', text: "XLS", title: 'XLS-File' },
            { extend: 'pdf', className: 'btn-info', title: $('title').text() }
        ],
});

}

/**
 * 
 * @param {*} idTableToRefrech 
 */
function datatablesRefresh(idTableToRefrech) {

    if (!$.fn.dataTable) return;       

    // Filter
    $(idTableToRefrech).DataTable({
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );

                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        },
            'paging': true, // Table pagination
            'ordering': true, // Column ordering
            'info': true, // Bottom left status text
            "rowHeight": "auto",
            // Text translation options
            // Note the required keywords between underscores (e.g _MENU_)
            // Affichage de l'&eacute;l&eacute;ment  pour élément
            // "sSearch":         "Rechercher&nbsp;:",
            //"sLengthMenu":     "Afficher&nbsp;  _MENU_ &eacute;l&eacute;ments &nbsp;",
            //"sPrevious":   "Pr&eacute;c&eacute;dent",
            //"sNext":       "Suivant",
            oLanguage: {"sProcessing":     "Traitement en cours...",
                "sSearch":         "Rech. ",
                "sLengthMenu":     "Afficher&nbsp;  _MENU_ lignes &nbsp;",
                "sInfo":           " _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
                "sInfoEmpty":      " 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
                "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
                "sInfoPostFix":    "",
                "sLoadingRecords": "Chargement en cours...",
                "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
                "sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
                "oPaginate": {
                    "sFirst":      "Premier",
                    "sPrevious":   "<<",
                    "sNext":       ">>",
                    "sLast":       "Dernier"
                },
                "oAria": {
                    "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
                    "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
                },
                "select": {
                        "rows": {
                            _: " %d lignes séléctionnées",
                            0: " Aucune ligne séléctionnée",
                            1: " 1 ligne séléctionnée"
                        } 
                }
            },
            "iDisplayLength": 5,
            "lengthMenu": [[5, 10, 15, 20, 25, -1], [5,10,15,20,25,"Tous"]],
            // Datatable Buttons setup
            dom: 'ltBfrtip',
            buttons: [
                //{ extend: 'copy', className: 'btn-info' },
                //{ extend: 'csv', className: 'btn-info' },
                { extend: 'excel', className: 'btn-info', text: "XLS", title: 'XLS-File' },
                { extend: 'pdf', className: 'btn-info', title: $('title').text() }
            ],
    });
    
}

// pour la manipulation du qrCode
function updateQrC() {
	updateGui();
	updateQrCode();
}
    var guiValuePairs = [
        ['qrSize', 'px'],
        ['minversion', ''],
        ['quiet', ' modules'],
        ['radius', '%'],
        ['msize', '%'],
        ['mposx', '%'],
        ['mposy', '%']
    ];

    function updateGui() {
        $.each(guiValuePairs, function (idx, pair) {
            var $label = $('label[for="' + pair[0] + '"]');
            $label.text($label.text().replace(/:.*/, ': ' + $('#' + pair[0]).val() + pair[1]));
        });
    }

    function updateQrCode() {
		
		var options2 = {
            render: $('#render').val(),
            ecLevel: $('#eclevel').val(),
            minVersion: parseInt($('#minversion').val(), 10),

            fill: $('#qrFill').val(),
            background: $('#qrBackground').val(),

            text: $('#qrcodeValue').val(),
            size: parseInt($('#qrSize').val(), 10),
            radius: parseInt($('#radius').val(), 10) * 0.01,
            quiet: parseInt($('#quiet').val(), 10),

            mode: parseInt($('#mode').val(), 10),

            mSize: parseInt($('#msize').val(), 10) * 0.01,
            mPosX: parseInt($('#mposx').val(), 10) * 0.01,
            mPosY: parseInt($('#mposy').val(), 10) * 0.01,

            label: $('#qrLabel').val(),
            //$('#font').val()
            fontname: "Ubuntu Mono" ,
            fontcolor: $('#qrFontcolor').val(),

            image: $('#img-buffer')[0]
		};
		
		var options = {
            render: $('#render').val(),
            ecLevel: $('#eclevel').val(),
			text: $('#qrcodeValue').val(),

            fill: $('#qrFill').val(),
            background: $('#qrBackground').val(),
            
            size: parseInt($('#qrSize').val(), 10),
            
            label: $('#qrLabel').val(),
            fontname: $('#font').val(),
            fontcolor: $('#qrFontcolor').val()

        };

        $('#artQrCode').empty().qrcode(options2);
    }

    function printBloc(idBloc){
        var printBlock = $(this).parents(idBloc).siblings(idBloc);
        printBlock.hide();
        window.print();
        printBlock.show();
    }



