
/* --------------------------------------------------------
 * *** 					add_user        		    	 ***
 * ---------------------------------------------------------
 * ETML
 * Auteur 		    : Dimitrios Lymberis
 * Date 		    : 02.06.2019
 * Description 		: Ajout d'un utilisateur
 *                    le contenu html de la page add.php 
 *                    du module user s'insère dans 
 *                    la modal popup d'ajout
 * -------------------------------------------------------- */
function add_article(){
    // Ouvrir la modal d'ajout d'article
    loadProductsAndRooms();
    $('#addArticleModal').modal("show");
}

/**
 * Charge les produits et salles pour les sélecteurs
 */
function loadProductsAndRooms() {
    // Charger les produits
    $.ajax({
        url: '/api/products',
        type: 'GET',
        dataType: 'json'
    }).done(function(products) {
        const $productSelect = $('#articleProduct');
        $productSelect.empty().append('<option value="">Sélectionner un produit...</option>');

        products.forEach(function(product) {
            $productSelect.append(`<option value="${product.id}" data-name="${product.name}" data-description="${product.description}" data-picture="${product.picture}" data-category="${product.category?.name || ''}">${product.name}</option>`);
        });
    }).fail(function(error) {
        console.error('Erreur lors du chargement des produits:', error);
    });

    // Charger les salles
    $.ajax({
        url: '/api/rooms',
        type: 'GET',
        dataType: 'json'
    }).done(function(rooms) {
        const $roomSelect = $('#articleRoom');
        $roomSelect.empty().append('<option value="">Sélectionner une salle...</option>');

        rooms.forEach(function(room) {
            $roomSelect.append(`<option value="${room.id}">${room.name}</option>`);
        });
    }).fail(function(error) {
        console.error('Erreur lors du chargement des salles:', error);
    });
}

/**
 * Gestionnaire pour le changement de salle - charge les armoires
 */
$('#articleRoom').on('change', function() {
    const roomId = $(this).val();
    const $chestSelect = $('#articleChest');

    if (roomId) {
        $chestSelect.prop('disabled', false);
        $chestSelect.empty().append('<option value="">Chargement...</option>');

        $.ajax({
            url: `/api/rooms/${roomId}/chests`,
            type: 'GET',
            dataType: 'json'
        }).done(function(chests) {
            $chestSelect.empty().append('<option value="">Sélectionner une armoire...</option>');

            chests.forEach(function(chest) {
                $chestSelect.append(`<option value="${chest.id}">${chest.name}</option>`);
            });
        }).fail(function(error) {
            console.error('Erreur lors du chargement des armoires:', error);
            $chestSelect.empty().append('<option value="">Erreur de chargement</option>');
        });
    } else {
        $chestSelect.prop('disabled', true);
        $chestSelect.empty().append('<option value="">Sélectionner d\'abord une salle...</option>');
    }
});

/**
 * Gestionnaire pour le changement de produit - affiche l'aperçu
 */
$('#articleProduct').on('change', function() {
    const $selectedOption = $(this).find('option:selected');
    const $preview = $('#productPreview');

    if ($selectedOption.val()) {
        const productName = $selectedOption.data('name');
        const productDescription = $selectedOption.data('description');
        const productPicture = $selectedOption.data('picture');
        const productCategory = $selectedOption.data('category');

        $('#productName').text(productName);
        $('#productDescription').text(productDescription);
        $('#productCategory').text(productCategory);

        if (productPicture) {
            $('#productImage').attr('src', '/img/products/' + productPicture + '.jpg');
        } else {
            $('#productImage').attr('src', '/img/products/default.jpg');
        }

        $preview.show();
    } else {
        $preview.hide();
    }
});

/**
 * Gestionnaire de soumission du formulaire d'ajout d'article
 */
$('#addArticleForm').on('submit', function(e) {
    e.preventDefault();

    const formData = {
        label: $('#articleLabel').val(),
        purchase_date: $('#articlePurchaseDate').val(),
        price: $('#articlePrice').val(),
        note: $('#articleNote').val(),
        fkProduct: $('#articleProduct').val(),
        fkChest: $('#articleChest').val()
    };

    // Validation côté client
    if (!formData.label || !formData.fkProduct || !formData.fkChest) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    // Désactiver le bouton de soumission
    const $submitBtn = $(this).find('button[type="submit"]');
    const originalText = $submitBtn.html();
    $submitBtn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-2"></i>Création...');

    $.ajax({
        url: '/articles',
        type: 'POST',
        data: formData,
        dataType: 'json'
    }).done(function(response) {
        // Fermer la modal
        $('#addArticleModal').modal('hide');

        // Réinitialiser le formulaire
        $('#addArticleForm')[0].reset();
        $('#productPreview').hide();
        $('#articleChest').prop('disabled', true).empty().append('<option value="">Sélectionner d\'abord une salle...</option>');

        // Afficher un message de succès
        alert('Article créé avec succès !');

        // Recharger la page pour afficher le nouvel article
        location.reload();

    }).fail(function(xhr) {
        console.error('Erreur lors de la création:', xhr);
        let errorMessage = 'Erreur lors de la création de l\'article';

        if (xhr.responseJSON && xhr.responseJSON.message) {
            errorMessage = xhr.responseJSON.message;
        }

        alert(errorMessage);
    }).always(function() {
        // Réactiver le bouton
        $submitBtn.prop('disabled', false).html(originalText);
    });
});

/***
 * --------------------------------------------------------
 * *** 					setArticleView 					***
 * --------------------------------------------------------
 *
 * ETML
 * Auteur 		: Dimitrios Lymberis
 * Date 		: 15.02.2019
 * Description 	: récupère le détail d'un article
 * 				  qui l'a emprunté et les remarques
 * 				  des emprunts
 * 				  affiche la popup view dans la page
 * 				  index.php du module article
 * 				   
 *
 * * @param idArticle 	--> identifiant de l'article
 *
 * ---------------------------------------------------------
 */
function setArticleView(idArticle) {

	$.ajax({
		type : "GET",
		datatype : "html",
		url : "/articles/"+idArticle+"/view",
	}).done(function(data){
			$("#modViewArticle").html(data);

			// on ouvre la popup modal
			$("#artiModalView").modal("show");
		});

} //setArticleView

/**
 * 
 * @param {int} idArticle identifiant de l'article
 */
function setArticleQrCodeView(idArticle) {

	$.ajax({
		type : "GET",
		datatype : "json",
		url : "/articles/"+idArticle+"/qrcode",
	}).done(function(data){
		// Remplir les informations du modal
		$("#qrModalArticleLabel").text(data.arti_label);
		$("#qrModalProductImg").attr('src', '/img/products/' + data.prod_picture + '.jpg');
		$("#qrModalProductName").text(data.prod_name);
		$("#qrModalProductDesc").text(data.prod_description);
		$("#qrModalProductNote").html('<i class="text-muted">' + (data.prod_note || '') + '</i>');
		$("#qrModalArticleNote").html('<i class="text-orange">' + (data.arti_note || '') + '</i>');
		$("#qrModalLocation").text((data.room_name || 'N/A') + ' / ' + (data.chest_name || 'N/A'));

		// Mettre à jour le statut d'emprunt
		if (data.isBorrowed) {
			$("#qrModalArticleIcon").removeClass('fa-check text-green').addClass('fa-times text-red');
			$("#qrModalArticleStatusText").text('Emprunté');
			$("#qrModalArticleStatusBadge").removeClass('bg-success').addClass('bg-danger').html('<i class="fas fa-times-circle me-1"></i>Emprunté');
		} else {
			$("#qrModalArticleIcon").removeClass('fa-times text-red').addClass('fa-check text-green');
			$("#qrModalArticleStatusText").text('Disponible');
			$("#qrModalArticleStatusBadge").removeClass('bg-danger').addClass('bg-success').html('<i class="fas fa-check-circle me-1"></i>Disponible');
		}

		// Remplir le textarea avec le contenu du QR code
		$("#qrcodeValue").val(data.qrContent);

		// Initialiser le label du QR code
		$("#qrLabel").val((data.room_name || 'N/A') + '/' + (data.chest_name || 'N/A'));
		
		// Effacer le QR code précédent
		$("#artQrCode").empty();
		
		// Générer le QR code
		updateQrCode();

		// Initialiser les événements pour les sliders
		initSliderEvents();

		// Ouvrir le modal
		$("#articleQrCodeModal").modal("show");
	}).fail(function(error){
		console.error('Erreur lors du chargement du QR code:', error);
		alert('Erreur lors du chargement des données du QR code');
	});

} //setArticleQrCodeView

/**
 * Initialise les événements pour les sliders
 */
function initSliderEvents() {
	// Mettre à jour les valeurs affichées des sliders en temps réel
	$('#qrSize').on('input', function() {
		$('#qrSizeValue').text($(this).val() + 'px');
		updateQrCode();
	});

	$('#msize').on('input', function() {
		$('#msizeValue').text($(this).val() + '%');
		updateQrCode();
	});

	// Événements pour les autres contrôles
	$('#qrLabel, #qrMode, #qrFontcolor, #qrFill, #qrBackground').on('input change', function() {
		updateQrCode();
	});
}

/**
 * Met à jour l'affichage du QR code en fonction des options
 */
function updateQrCode() {
	const qrContent = $("#qrcodeValue").val();
	const qrSize = parseInt($('#qrSize').val(), 10);
	const qrFill = $('#qrFill').val();
	const qrBackground = $('#qrBackground').val();
	const mode = parseInt($('#qrMode').val(), 10);
	const label = $('#qrLabel').val();
	const fontColor = $('#qrFontcolor').val();
	const labelSize = parseInt($('#msize').val(), 10);

	// Effacer le contenu précédent
	$("#artQrCode").empty();

	// Créer un conteneur pour le QR code
	const container = document.createElement('div');
	container.id = 'qrCodeContainer';
	container.className = 'd-flex justify-content-center align-items-center';
	container.style.minHeight = '200px';
	document.getElementById('artQrCode').appendChild(container);
	
	// Générer le QR code en utilisant la librería qrcode
	if (typeof QRCode !== 'undefined') {
		try {
			QRCode.toCanvas(container, qrContent, {
				errorCorrectionLevel: 'H',
				type: 'image/png',
				quality: 0.95,
				margin: 1,
				width: qrSize,
				color: {
					dark: qrFill,
					light: qrBackground
				}
			}, function (error) {
				if (error) {
					console.error('Erreur génération QR code:', error);
				}
				// Ajouter le label si demandé
				if (mode > 0 && label) {
					addLabelToQrCode(label, mode, fontColor, labelSize);
				}
			});
		} catch (error) {
			console.error('Erreur lors de la génération du QR code:', error);
			$("#artQrCode").html('<div class="alert alert-danger text-center"><i class="fas fa-exclamation-triangle me-2"></i>Erreur: Impossible de générer le QR code</div>');
		}
	} else {
		console.error('QRCode library not loaded');
		$("#artQrCode").html('<div class="alert alert-warning text-center"><i class="fas fa-exclamation-circle me-2"></i>Erreur: Bibliothèque QRCode non chargée</div>');
	}
}

/**
 * Ajoute un label au QR code généré
 */
function addLabelToQrCode(label, mode, fontColor, labelSize) {
	const canvas = document.querySelector('#qrCodeContainer canvas');
	if (!canvas) {
		// Si no hay canvas, créer un wrapper div
		const container = document.getElementById('qrCodeContainer');
		const wrapper = document.createElement('div');
		wrapper.className = 'qrcode-with-label text-center';

		const labelDiv = document.createElement('div');
		labelDiv.className = 'mt-3 fw-bold';
		labelDiv.style.color = fontColor;
		labelDiv.style.fontSize = (labelSize * 0.5 + 8) + 'px';
		labelDiv.textContent = label;
		
		wrapper.appendChild(container.firstChild || container.children[0]);
		wrapper.appendChild(labelDiv);
		
		container.innerHTML = '';
		container.appendChild(wrapper);
	} else {
		// Ajouter le label directement sur le canvas
		const context = canvas.getContext('2d');
		const fontSize = (qrSize * labelSize) / 100;

		if (mode === 1) {
			// Label-Strip : ajouter une bande de couleur au bas
			const stripHeight = fontSize * 1.5;
			context.fillStyle = fontColor;
			context.fillRect(0, qrSize - stripHeight, qrSize, stripHeight);
			context.fillStyle = qrBackground;
			context.font = 'bold ' + fontSize + 'px Arial';
			context.textAlign = 'center';
			context.fillText(label, qrSize / 2, qrSize - stripHeight / 3);
		} else if (mode === 2) {
			// Label-Box : ajouter un encadré avec le label
			const boxHeight = fontSize * 1.8;
			context.fillStyle = fontColor;
			context.strokeStyle = fontColor;
			context.lineWidth = 2;
			context.strokeRect(5, qrSize - boxHeight - 5, qrSize - 10, boxHeight);
			context.fillText(label, qrSize / 2, qrSize - fontSize * 0.5);
		}
	}
}


/**
 * Copie le contenu du QR code dans le presse-papiers
 */
function copyQrCode() {
	const qrContent = $("#qrcodeValue").val();
	if (navigator.clipboard && qrContent) {
		navigator.clipboard.writeText(qrContent).then(function() {
			// Afficher une notification de succès
			showNotification('Contenu du QR code copié dans le presse-papiers', 'success');
		}, function(err) {
			console.error('Erreur lors de la copie:', err);
			showNotification('Erreur lors de la copie', 'error');
		});
	} else {
		// Fallback pour les navigateurs plus anciens
		const textArea = document.createElement('textarea');
		textArea.value = qrContent;
		document.body.appendChild(textArea);
		textArea.select();
		try {
			document.execCommand('copy');
			showNotification('Contenu du QR code copié dans le presse-papiers', 'success');
		} catch (err) {
			showNotification('Erreur lors de la copie', 'error');
		}
		document.body.removeChild(textArea);
	}
}

/**
 * Affiche une notification temporaire
 */
function showNotification(message, type) {
	// Supprimer les notifications existantes
	$('.qr-notification').remove();

	// Créer la notification
	const notification = $('<div class="qr-notification alert alert-' + (type === 'success' ? 'success' : 'danger') + ' alert-dismissible fade show position-fixed" style="top: 20px; right: 20px; z-index: 9999; min-width: 300px;">')
		.html('<i class="fas fa-' + (type === 'success' ? 'check-circle' : 'exclamation-triangle') + ' me-2"></i>' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>');

	$('body').append(notification);

	// Auto-supprimer après 3 secondes
	setTimeout(function() {
		notification.fadeOut(function() {
			$(this).remove();
		});
	}, 3000);
}

/**
 * Imprime un élément du DOM
 * @param {string} divId - l'id de l'élément à imprimer
 */
function printBloc(divId) {
	const printContents = document.getElementById(divId).innerHTML;
	const originalContents = document.body.innerHTML;
	
	document.body.innerHTML = printContents;
	window.print();
	document.body.innerHTML = originalContents;
	
	// Régénérer le QR code après impression
	updateQrCode();
}



