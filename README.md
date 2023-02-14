===================================================================================================================================================

# Autenticador_convenio_201

Script Desenvolvido com o Objetivo de Verificar se o valor das somas dos produtos de cada cliente da empresa corresponde ao valor total de cada NF.


A aplicação ultiliza o google planilhas com a extenção Apps Script, fazendo assim a leitura da planilha de todas as NFs do Mês.
Seu desenvolvimento foi realizado para resolver um problema onde o governo do estado ao mudar suas diretrizes do documento exigio que o valor de cada produto e serviço prestado devesse constar na nota alem do valor total. O problema é que em algumas notas o programa responsavel pela montagem do documento estava fazendo alguns calculos errados dos produtos alem disso eram documentos com mais de 40000 linhas sendo assim uma coisa inviavel para uma analise a mão, pensando nisso desenvolvi esse script para percorrer toda a planilha e fazer as somas de cada grupo e ao final comparando com o total de cada nota, e caso algum calculo esteja errado ele exibira uma mensagem mostrando a linha, o total esperado e o total calculado.


- Script inicia pegando o Primeiro valor da coluna 'O' que corresponde ao numero da primeira nota fiscal da planilha.
- Logo apos percorre linha por linha dessa coluna comparando o proximo numero com o primeiro da coluna(numero da NF).
- Caso o proximo numero seja maior que o primeiro numero(numero da NF), significa que é o fim da nota.
- Logo após essa verificação o script pega todos os valores armazenados nas celulas da coluna 'I' da respectiva nota.
- Faz a soma e finalmente compara com o total da nota que corresponde a primeira linha da coluna 'K' de cada grupo de notas fiscais.
- Caso aja algum erro o script mostrara no console uma mensagem com o numero da linha do erro, o total esperado e o total calculado.

  EXEMPLO:
                        Valor de Cada Produto          Total               Numro da NF

                                  I                      k                      O


                                  4000	100000000000000	9990	2012023	21	46	182496  -----                                                         
                                  1000	100000000000000	9990	2012023	0	   0	  0          |
                                  1500	100000000000000	9990	2012023	0	   0	  0          |---- Primeiro grupo de NF
                                  1990	100000000000000	9990	2012023	0	   0	  0          |
                                  1500	100000000000000	9990	2012023	0	   0	  0 ---------      
                                  3200	100000000000000	7990	3012023	21	46	182497-------
                                   800	100000000000000	7990	3012023	0	   0	  0         |
                                  1500	100000000000000	7990	3012023	0	   0	  0         |----- Segundo Grupo de Nf
                                   990	100000000000000	7990	3012023	0	   0	  0         |
                                  1500	100000000000000	7990	3012023	0	   0	  0---------
                                  4000	100000000000000	9990	3012023	21	46	182498
                                  
                                  
=======================================================================================================================================================                                  
