from django.contrib import admin
from models import *

class UnidadeAdmin(admin.ModelAdmin):
	list_display = ('id', 'unidade', 'descricao')


class SegmentoAdmin(admin.ModelAdmin):
	list_display = ('id', 'segmento', 'descricao')


class ColaboradorAdmin(admin.ModelAdmin):
	list_display = ('id', 'colaborador', 'unidade', 'segmento')


class ProdutoAdmin(admin.ModelAdmin):
	list_display = ('id', 'produto', 'descricao', 'segmento')


admin.site.register(Unidade, UnidadeAdmin)
admin.site.register(Segmento, SegmentoAdmin)
admin.site.register(Colaborador, ColaboradorAdmin)
admin.site.register(Produto, ProdutoAdmin)