# coding: utf-8
from django.conf.urls import patterns, include, url

urlpatterns = patterns('indicadores.tarefa.views',
    url(r'', 'home', name='home'),
)
