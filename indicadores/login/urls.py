# coding: utf-8
from django.conf.urls import patterns, include, url

urlpatterns = patterns('indicadores.login.views',
 	url(r'^validate/$', 'validate', name='login'),
    url(r'^$', 'home', name='login'),
)