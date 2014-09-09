#coding: utf-8
from django import template

register = template.Library()


@register.filter(name='get_porcentagem')
def get_porcentagem(porcentagem):

    if porcentagem == "1":
    	return "Não iniciada"

    elif porcentagem == "2":
    	return "Em estudo"

    elif porcentagem == "3":
    	return "Sendo implementada"

    elif porcentagem == "4":
    	return "Em testes"

    elif porcentagem == "5":
    	return "Finalizada"

@register.filter(name='get_url')
def get_url(url):

    url = url.split('/')
    return url[3]


@register.filter(name='getClassByUrl')
def getClassByUrl(url, args):

    url = url.split('/')
    url = url[-2]

    args = args.split('-')

    for arg in args:

        if url == arg:
            return 'active'

    return ''
