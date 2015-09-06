app.controller('disciplinaController', function($scope) { 

	$scope.disciplina = {};
	$scope.listaDisciplinas = [];

	$scope.salvar = function() { 
		
		$scope.listaDisciplinas.push($scope.disciplina);
		$scope.disciplina = {};
}
	$scope.remover = function(disciplina){
	
	var indice = $scope.listaDisciplinas.indexOf(disciplina);
	$scope.listaDisciplinas.splice(indice,1);

			}
	});
