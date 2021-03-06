$(document).ready(function() {
    
    $('#tabela-uol').DataTable( {
        "ajax": {
            "url": "users.json",
            "dataType": "Json",
            "dataSrc": ""
        },
        "columnDefs": [ 
          {
            "targets": 0,
            "data": null, render: function (data) {
              return '<span class="bg-img"><span class="glyphicon glyphicon-user id-'+data._id+'" aria-hidden="true"></span></span>';
            }            
          },
          {
            "targets": 1,
            "data": null, render: function (data) {
              return '<strong>'+data.name+'</strong><p>'+data.contact+'</p>';
            }            
          },
          {
            "targets": 2,
            "data": null, render: function (data) {
              return '<span class="status '+ data.status.type+'"></span>'+data.status.description;   
            }         
          },          
          {
          "targets": 3,
          "data": "name",
          "render": function (data) {
            return '<button type="button" class="btn btn-default btn-configure"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span></button>';
          }
        } ],        
        "pagingType": "full_numbers",
        "aaSorting": [[1, "asc"]],
        "language": {
            "emptyTable":     "Sem dados disponíveis na tabela",
            "info":           "Exibindo _START_ à _END_ de _TOTAL_ resultados",
            "infoEmpty":      "Exibindo 0 de 0 resultado",
            "lengthMenu":     "Mostar _MENU_ resultado",
            "loadingRecords": "Carregando...",
            "processing":     "Processando...",
            "search":         "Buscar",
            "infoFiltered": "(filtrado a partir de _MAX_ resultados totais)",
            "searchPlaceholder": "Buscar por nome ou email...",
            "zeroRecords":    "Nenhum resultado correspondente encontrado",
            "paginate": {
                "first":      "<span aria-hidden='true'>←</span>",
                "last":       "<span aria-hidden='true'>→</span>",
                "next":       "<span aria-hidden='true'>»</span>",
                "previous":   "<span aria-hidden='true'>«</span>"
            }
        },         
    });
}); 