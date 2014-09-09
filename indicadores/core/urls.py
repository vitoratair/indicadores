# coding: utf-8
from django.conf.urls import patterns, include, url

urlpatterns = patterns('indicadores.core.views',
    url(r'segmento/$', 'segmento', name='home'),
    url(r'', 'home', name='home'),
)
