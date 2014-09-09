from django.shortcuts import render


def home(request):

    return render(request, 'core/index.html')

def segmento(request):

	return render(request, 'core/segmento.html')
