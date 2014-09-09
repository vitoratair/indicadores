# coding: utf-8
from django.conf.urls import patterns, include, url

urlpatterns = patterns('indicadores.tarefa.views',
    url(r'editar/(\d+)/$', 'editar', name='home'),
    url(r'', 'home', name='home'),
)
