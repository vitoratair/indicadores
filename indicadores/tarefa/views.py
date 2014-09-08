from django.shortcuts import render

def home(request):
	"""

	"""
	return render(request, 'tarefa/index.html')