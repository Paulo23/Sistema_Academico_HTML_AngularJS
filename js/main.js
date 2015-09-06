var app = angular.module('SistemaCadastro',['ngRoute']);

app.config(['$routeProvider',
  	function($routeProvider) {
    $routeProvider.
      when('/cadastroDisciplina', {
        templateUrl: 'cadastro_disciplina.html',
        controller: 'disciplinaController'
      }).
      when('/cadastroTurma', {
        templateUrl: 'cadastro_turma.html',
        controller: 'turmaController'
      }).
      when('/cadastroAluno', {
        templateUrl: 'cadastro_aluno.html',
        controller: 'alunoController'
      });
}]);