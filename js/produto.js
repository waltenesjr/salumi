(function ($) {
    "use strict";

    var produtos = [
        {
            titulo: "Sal de Parrilla & Pimenta Ed. Especial Netão",
            descricao: "Uma das dificuldades mais comuns é descobrirmos o que exatamente significa ''uma pitada de sal'' ou ''pimenta a gosto'', por isso, em parceria com o renomado açougueiro e churrasqueiro Netão criamos o Sal de Parrilla & Pimenta.",
            imagem: "https://emporiocantagallo.vteximg.com.br/arquivos/ids/155936-300-300/Sal-e-Pimenta-Netao---01.jpg",
            valor: 2300
        },
        {
            titulo: "Flor de Sal Ed. Especial Netão",
            descricao: "Diferentemente dos sais comuns, a Flor de Sal não deve ser utilizada durante o preparo dos alimentos e nem deve ir ao fogo.",
            imagem: "https://emporiocantagallo.vteximg.com.br/arquivos/ids/155947-300-300/Flor-de-Sal-Netao---02.jpg",
            valor: 1600
        },
        {
            titulo: "Sal de Parrilla Ed. Especial Netão",
            descricao: "Entre em contato com a SanAmbiental e faça seu orçamento!",
            imagem: "https://emporiocantagallo.vteximg.com.br/arquivos/ids/155944-300-300/Sal-de-Parrilla---01.jpg",
            valor: 1400
        },
        {
            titulo: "Sweet Chilli 380g",
            descricao: "O Sweet Chilli é um molho de pimenta agridoce levemente apimentado de origem Tailandesa.",
            imagem: "https://emporiocantagallo.vteximg.com.br/arquivos/ids/155951-300-300/Sweet-Chilli-01.jpg",
            valor: 2000
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
                                "<img class=\"img-fluid mb-5\" src=\"" + this.imagem + "\" alt=\"\"><br>" +
                                "<a class='text-produto-25'>R$ </a><a class=\"dinheiro text-produto-25\" >" + this.valor + "</a><br>" +
                                "<p class=\"mb-5 text-produto-15\"><strong>" + this.descricao + "</strong></p>" +
                                "<br><br>" +
                                "<form target=\"pagseguro\" method=\"post\" action=\"https://sandbox.pagseguro.uol.com.br/checkout/checkout.jhtml\">\n" +
                                    "<input type=\"hidden\" name=\"email_cobranca\" value=\"suporte@lojamodelo.com.br\" />\n" +
                                    "<input type=\"hidden\" name=\"tipo\" value=\"CBR\" />\n" +
                                    "<input type=\"hidden\" name=\"moeda\" value=\"BRL\" />\n" +
                                    "<input type=\"hidden\" name=\"item_id\" value=\"" + cont + "\" />\n" +
                                    "<input type=\"hidden\" name=\"item_descr\" value=\"" + this.titulo + "\" />\n" +
                                    "<input type=\"hidden\" name=\"item_quant\" value=\"1\" />\n" +
                                    "<input type=\"hidden\" name=\"item_valor\" value=\"" + this.valor + "\" />\n" +
                                    "<input type=\"hidden\" name=\"frete\" value=\"0\" />\n" +
                                    "<input type=\"hidden\" name=\"peso\" value=\"0\" />\n" +
                                    "<input type=\"image\" name=\"submit\" src=\"https://dabuttonfactory.com/button.png?t=COMPRAR&f=Calibri-Bold&ts=24&tc=fff&w=200&h=50&c=0&bgt=unicolored&bgc=652d2b\" alt=\"Pague com PagSeguro - é rápido, grátis e seguro!\" />\n" +
                                "</form>" +
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
                    "<a class='text-produto-25'>R$ </a><a class=\"dinheiro text-produto-25\" >" + this.valor + "</a><br>" +
                    "<a style=\"color: #652D2B;font-weight: 700;font-family: 'Montserrat';\">" + this.titulo + "</a>" +
                    "<br><br>" +
                    "<form target=\"pagseguro\" method=\"post\" action=\"https://sandbox.pagseguro.uol.com.br/checkout/checkout.jhtml\">\n" +
                        "<input type=\"hidden\" name=\"email_cobranca\" value=\"suporte@lojamodelo.com.br\" />\n" +
                        "<input type=\"hidden\" name=\"tipo\" value=\"CBR\" />\n" +
                        "<input type=\"hidden\" name=\"moeda\" value=\"BRL\" />\n" +
                        "<input type=\"hidden\" name=\"item_id\" value=\"" + cont + "\" />\n" +
                        "<input type=\"hidden\" name=\"item_descr\" value=\"" + this.titulo + "\" />\n" +
                        "<input type=\"hidden\" name=\"item_quant\" value=\"1\" />\n" +
                        "<input type=\"hidden\" name=\"item_valor\" value=\"" + this.valor + "\" />\n" +
                        "<input type=\"hidden\" name=\"frete\" value=\"0\" />\n" +
                        "<input type=\"hidden\" name=\"peso\" value=\"0\" />\n" +
                        "<input type=\"image\" name=\"submit\" src=\"https://dabuttonfactory.com/button.png?t=COMPRAR&f=Calibri-Bold&ts=24&tc=fff&w=200&h=50&c=0&bgt=unicolored&bgc=652d2b\" alt=\"Pague com PagSeguro - é rápido, grátis e seguro!\" />\n" +
                    "</form>" +
                "</a>" +
            "</div>"
        );
        cont++;
    });
})(jQuery);
