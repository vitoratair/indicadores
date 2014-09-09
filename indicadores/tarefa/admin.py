from django.contrib import admin
from models import *

class TarefaAdmin(admin.ModelAdmin):
	list_display = ('id', 'tarefa', 'descricao', 'colaborador', 'percentual', 'dataInicio', 'dataFim')


admin.site.register(Tarefa, TarefaAdmin)