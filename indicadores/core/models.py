#coding: utf-8

from django.db import models
from django import forms
from django.utils.translation import ugettext_lazy as _


class Unidade(models.Model):
    unidade = models.CharField(_(u'Unidade'), max_length=20, unique=True)
    descricao = models.CharField(_(u'Descrição'), max_length=100)

    class Meta:
        ordering = ['unidade']
        verbose_name = _(u'Unidade')
        verbose_name_plural = _(u'Unidades')

    def __unicode__(self):
        return self.unidade


class Segmento(models.Model):
    segmento = models.CharField(_(u'Segmento'), max_length=20, unique=True)
    descricao = models.CharField(_(u'Descrição'), max_length=100)

    class Meta:
        ordering = ['segmento']
        verbose_name = _(u'Segmento')
        verbose_name_plural = _(u'Segmentos')

    def __unicode__(self):
        return self.segmento


class Colaborador(models.Model):
    colaborador = models.CharField(_(u'Colaborador'), max_length=30, unique=True)
    unidade = models.ForeignKey('Unidade')
    segmento = models.ForeignKey('Segmento')

    class Meta:
        ordering = ['colaborador']
        verbose_name = _(u'Colaborador')
        verbose_name_plural = _(u'Colaboradores')

    def __unicode__(self):
        return self.colaborador