

//===========================FUNCIONAL====================================//



    //VALIDAÇÃO DE DOCUMENTO FISCAL.

    //A COLUNA "E" DA PLANILHA REPRESENTA OS VALORES QUE VÃO SER SOMADOS.
    //A COLUNA "L" REPRESENTA O VALOR TOTAL DE CADA NOTA.
    //A COLUNA "P" REPRESENTA O NUMERO DA NOTA.

    function compareGroupTotals() {
        var sheet = SpreadsheetApp.getActiveSheet();
        var data = sheet.getDataRange().getValues();
        
        var grupoAtual = 0;
        var indexGrupoAtual = 0;
        var totalDoGrupo = 0;
        
        for (var i = 0; i < data.length; i++) {
        var row = data[i];
        if (row[14] > grupoAtual) {
          if (grupoAtual != 0) {
            if (totalDoGrupo != data[indexGrupoAtual][10]) {
              Logger.log("Erro na linha " + (indexGrupoAtual + 1) + ". Total Esperado: " + data[indexGrupoAtual][10] + ", Total: " + totalDoGrupo);
              }
              totalDoGrupo = 0;
              }
              grupoAtual = row[14];
              indexGrupoAtual = i;
            }
              totalDoGrupo += row[8];
          }
        }


//========================================================================//