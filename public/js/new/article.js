
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
    $('#article-modal').html(null);
    $.ajax({
        url:'article/add',
        dataType:'html',
    }).done(function(html){
        $('#article-modal').append(html);
        $('#article-modal').modal("show");
        
        
    });
}

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
		datatype : "html",
		url : "/articles/"+idArticle+"/qrcode",
	}).done(function(data){
			$("#modViewQrcodeArticle").html(data);

			var qrcodeValue=$("#qrcodeValue").val();

			// http://jeromeetienne.github.io/jquery-qrcode/
			updateQrC();
			/*
			$("#artQrCode").qrcode({
				render:"div",
				size: parseInt($('#qrSize').val(), 10),
				text: qrcodeValue
			});
*/
			// on ouvre la popup modal
			$("#artiModalQrCodeView").modal("show");
		});

} //setArticleView



