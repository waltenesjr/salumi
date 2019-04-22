(function ($) {
    "use strict";

    var produtos = [
        {
            titulo: "Sal de Parrilla & Pimenta Ed. Especial Netão",
            descricao: "Uma das dificuldades mais comuns é descobrirmos o que exatamente significa ''uma pitada de sal'' ou ''pimenta a gosto'', por isso, em parceria com o renomado açougueiro e churrasqueiro Netão criamos o Sal de Parrilla & Pimenta.",
            imagem: "https://emporiocantagallo.vteximg.com.br/arquivos/ids/155936-300-300/Sal-e-Pimenta-Netao---01.jpg"
        },
        {
            titulo: "Flor de Sal Ed. Especial Netão",
            descricao: "Diferentemente dos sais comuns, a Flor de Sal não deve ser utilizada durante o preparo dos alimentos e nem deve ir ao fogo.",
            imagem: "https://emporiocantagallo.vteximg.com.br/arquivos/ids/155947-300-300/Flor-de-Sal-Netao---02.jpg"
        },
        {
            titulo: "Sal de Parrilla Ed. Especial Netão",
            descricao: "Entre em contato com a SanAmbiental e faça seu orçamento!",
            imagem: "https://emporiocantagallo.vteximg.com.br/arquivos/ids/155944-300-300/Sal-de-Parrilla---01.jpg"
        },
        {
            titulo: "Sweet Chilli 380g",
            descricao: "O Sweet Chilli é um molho de pimenta agridoce levemente apimentado de origem Tailandesa.",
            imagem: "https://emporiocantagallo.vteximg.com.br/arquivos/ids/155951-300-300/Sweet-Chilli-01.jpg"
        }
    ];

    var cont = 1;
    $.each(produtos, function () {
        var idModal = 'portfolio-modal-' + cont;
        $("#modais").append(
            "<div class=\"portfolio-modal mfp-hide\" id=\"" + idModal + "\">" +
                "<div class=\"portfolio-modal-dialog bg-white\">" +
                    "<a class=\"close-button d-none d-md-block portfolio-modal-dismiss\" href=\"#\">" +
                        "<i class=\"fa fa-3x fa-times\"></i>" +
                    "</a>" +
                    "<div class=\"container text-center\">" +
                        "<div class=\"row\">" +
                            "<div class=\"col-lg-8 mx-auto\">" +
                                "<h2 class=\"text-secondary text-uppercase mb-0\">" + this.titulo + "</h2>" +
                                "<hr class=\"star-dark mb-5\">" +
                                "<img class=\"img-fluid mb-5\" src=\"" + this.imagem + "\" alt=\"\">" +
                                "<p class=\"mb-5\"><strong>" + this.descricao + "</strong></p>" +
                                "<a class=\"btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss\" href=\"#\">" +
                                    "<i class=\"fa fa-close\"></i>Fechar" +
                                "</a>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>"
        );
        $("#produtos").append(
            "<div class=\"col-md-6 col-lg-4 text-center\" style=\"padding-bottom: 20px;\">" +
                "<a class=\"portfolio-item d-block mx-auto\" href=\"#" + idModal + "\">" +
                    "<div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">" +
                        "<div class=\"portfolio-item-caption-content my-auto w-100 text-center text-white\">" +
                            "<i class=\"fas fa-search-plus fa-3x\"></i>" +
                        "</div>" +
                    "</div>" +
                    "<img class=\"img-fluid\" src=\"" + this.imagem + "\" alt=\"\">" +
                    "<a style=\"font-weight: 700; font-family: 'Montserrat';\">" + this.titulo + "</a>" +
                "</a>" +
            "</div>"
        );
        cont++;
    });
})(jQuery);
