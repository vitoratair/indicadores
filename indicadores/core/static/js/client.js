/**
* Funções para busca no banco se necessidade de carregar a página novamente
*/
$(document).ready(function() {

	var tableName = '#clientes tbody';
	

	$(':checkbox[id=clientes_bloqueados]').change (analisa);
	$(':checkbox[id=clientes_liberados]').change (analisa);

	// Analisa status //
	function analisa()
	{
		// Analisa se é para listar todas as auditorias //
		if ( ( $('#clientes_bloqueados').is(':checked') &&  $('#clientes_liberados').is(':checked') ) || ( $('#clientes_bloqueados').is(':unchecked') &&  $('#clientes_liberados').is(':unchecked') ) )
		{
			updateClients('3');
			return;
		}

		// Analisa se é para listar somente as bloqueados //
		if ( $('#clientes_bloqueados').is(':checked') )
		{	
			updateClients('2');
			return;
		}


		// Analisa se é para listar somente as executadas //
		if ( $('#clientes_liberados').is(':checked') )
		{
			updateClients('1');
			return;
		}
	}


	// Gera a requisição JSON no banco //
	function updateClients(status, regiao)
	{
		// verifica qual é a região atual
		var regiao = $("#checkout-form option:selected").val();

		$.getJSON( path + '/client/getClients/' + status + '/' + regiao, function (data){

			$(tableName).empty();

			$.each(data, function(i, obj) 
			{		
				if (obj.cliente_status == 2)
				{
					obj.cliente_status = "<span class=\"label label-danger\">Bloqueado</span>";	
					obj.cliente_update = "<a href=\"#\" onclick=\"updateStatus(" + obj.cliente_id + ",1)\"><i class=\"fa fa-unlock\"></i></a>";								
				}
				else
				{
					obj.cliente_status = "<span class=\"label label-success\">Liberado</span>";						
					obj.cliente_update = "<a href=\"#\" onclick=\"updateStatus(" + obj.cliente_id + ",2)\"><i class=\"fa fa-unlock-o\"></i></a>";
				}

				$(tableName).append(					
					'<tr>' 
					+ 					
						'<td>' + obj.cliente_hostname + ' </td>' 	+ 
						'<td>' + obj.cliente_ip +' </td>' 			+ 
						'<td>' + obj.cliente_mac +' </td>' 			+
						'<td>' + obj.cliente_download +' </td>' 	+
						'<td>' + obj.cliente_upload +' </td>' 		+ 
						'<td>' + obj.cliente_status +' </td>' 		+
						'<td>' + obj.cliente_update +' </td>' 		
					+   
					'</tr>'
				);
			
			});
		});

	}
	// updateClients //	

});
