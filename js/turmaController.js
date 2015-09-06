app.controller('turmaController', function($scope) { 

	$scope.turma = {};
	$scope.turma.disciplina = [];
	$scope.listaTurmas = [];

	$scope.listaSemestres=
	[
		{valor:"2015.1"},
		{valor:"2015.2"}
	];

	$scope.listaDisciplinas = 
	[
		{codigo:"T017", nome:"Arquitetura"},
		{codigo:"T409", nome:"Prog. Web II"}
	]

	$scope.salvar = function() { 
		
		$scope.listaTurmas.push($scope.turma);
		$scope.turma = {};
}
	$scope.remover = function(turma){
	
	var indice = $scope.listaTurmas.indexOf(turma);
	$scope.listaTurmas.splice(indice,1);

			}
	});
