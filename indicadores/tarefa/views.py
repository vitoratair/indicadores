#coding: utf-8

from django.shortcuts import render, HttpResponse
from django.core import serializers
from indicadores.core.models import Produto, Colaborador
from indicadores.tarefa.models import Tarefa

def buscaTarefas(produto, colaborador):
	"""
		Método responsável por buscar todas as tarefas
	"""
	produto = int(produto)
	colaborador = int(colaborador)

	if produto == 0 and colaborador == 0:
		tarefas = Tarefa.objects.all()

	elif produto == 0 and colaborador != 0:
		tarefas = Tarefa.objects.filter(colaborador=colaborador).all()

	elif produto != 0 and colaborador == 0:
		tarefas = Tarefa.objects.filter(produto=produto).all()

	elif produto != 0 and colaborador != 0:
		tarefas = Tarefa.objects.filter(produto=produto, colaborador=colaborador).all()

	return tarefas


def home(request):
	"""

	"""

	produtos = Produto.objects.all()
	colaboradores = Colaborador.objects.all()

	if request.method == 'POST':
		produto = request.POST.get('produto')
		colaborador = request.POST.get('colaborador')
	else:
		produto = 0
		colaborador = 0

	tarefas = buscaTarefas(produto, colaborador)

	return render(request, 'tarefa/index.html', {'colaboradores':colaboradores,
	 											'produtos': produtos,
	 											'tarefas': tarefas})

def editar(request, tarefa):
	tarefa = Tarefa.objects.filter(pk=tarefa).all()
	json = serializers.serialize('json', tarefa)
	return HttpResponse(json, mimetype='application/json')








