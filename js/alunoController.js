app.controller('alunoController', function($scope){

		$scope.aluno={};
		$scope.listaAlunos=[];
		$scope.listaTurmas=
		[
		{valor:"T049 - Prog. Web II"},
		{valor:"T500 - Arquitetura"}
		];

		$scope.salvar=function(){
			$scope.listaAlunos.push($scope.aluno);
			$scope.aluno={};
		}

		$scope.remover=function(aluno){
			var indice=$scope.listaAlunos.indexOf(aluno);
			$scope.listaAlunos.splice(indice,1);
		}
	
});

